$(function(){login()&&(location.href="index.html");var l=getCookie("token");function e(){var e=$("#schoolSearch").children("option:selected").val();null==e&&(e=1),$("#schoolRegion").html(""),$.ajax({"type":"GET","url":url+"/api/v1/school-region/index?school_id="+e+"&lang="+i18nLanguage,"dataType":"json","success":function(e){if(200===e.code)for(var o=0;o<e.data.length;o++){var r='<option value="'+e.data[o].id+'">'+e.data[o].name+"</option>";$("#schoolRegion").append(r)}else{r='<option value="error">'+e.msg+"</option>";$("#schoolRegion").append(r),$(".error").html(e.msg)}},"error":function(e,o,r){console.log(e,o,r)}})}$.ajax({"type":"GET","url":url+"/api/v1/school/index?city=&lang="+i18nLanguage,"dataType":"json","success":function(e){if(200===e.code)for(var o=0;o<e.data.length;o++){var r='<option value="'+e.data[o].id+'">'+e.data[o].name+"</option>";$("#schoolSearch").append(r)}else{r='<option value="error">'+e.msg+"</option>";$("#schoolSearch").append(r),$(".error").html(e.msg)}},"error":function(e,o,r){console.log(e,o,r)}}),$("#schoolSearch").bind("change",function(){e()}),e();api.getCaptcha();$("#Captcha").attr("src","http://byod.1o24.com/api/v1/system/get-captcha"),$("#Captcha").click(function(){$("#Captcha").attr("src","http://byod.1o24.com/api/v1/system/get-captcha?t="+Math.random())}),$(".code").click(function(){var e,o;$(".error").html("");var r=$("#select").children("option:selected").val();if("phone"===r){if(e=$(".account").val(),!CheckMobile(e))return void(isEnglish()?$(".error").html("Account format is incorrect."):$(".error").html("账号格式不正确."));o={"verify_type":r,"phone":e}}else if("email"===r){if(e=$(".account").val(),!CheckEmail(e))return void(isEnglish()?$(".error").html("E-mail format is incorrect."):$(".error").html("邮箱格式不正确。"));o={"verify_type":r,"email":e}}var t=$(".Captcha_code").val();if(0!==t.length){o.captcha=t;var a,i=60;$.ajax({"type":"POST","url":url+"/api/v1/user/send-verify-code","dataType":"json","data":o,"success":function(e){200===e.code?($(".timeOut").html(i),a=setInterval(n,1e3),$(".code").hide(),$(".countDown").show()):$(".error").html(e.msg)},"error":function(e,o,r){console.log(e,o,r)}})}else isEnglish()?$(".error").html("Graphic verification code cannot be empty"):$(".error").html("图形验证码不能为空");function n(){i--,$(".timeOut").html(i),i<0&&(clearInterval(a),$(".code").show(),$(".countDown").hide(),i=10)}}),$(".register").click(function(){var e,o,r,t,a,i;$(".error").html("");var n=$("#select").children("option:selected").val();if(r=$(".valid_code").val(),CheckCode(r))if(o=$(".password").val(),CheckPwd(o)){if(t=$("#schoolSearch").children("option:selected").val(),"phone"===n){if(e=$(".account").val(),!CheckMobile(e))return void(isEnglish()?$(".error").html("Account format is incorrect."):$(".error").html("账号格式不正确."));a={"verify_type":n,"phone":e,"verify_code":r,"password":o,"school_id":t},i={"verify_type":n,"phone":e,"password":o}}else if("email"===n){if(e=$(".account").val(),!CheckEmail(e))return void(isEnglish()?$(".error").html("E-mail format is incorrect."):$(".error").html("邮箱格式不正确。"));a={"verify_type":n,"email":e,"verify_code":r,"password":o,"school_region_id":t},i={"verify_type":n,"email":e,"password":o}}a.school_region_id=$("#schoolRegion").children("option:selected").val(),$.ajax({"type":"POST","url":url+"/api/v1/user/register","dataType":"json","data":a,"success":function(e){200===e.code?(isEnglish()?$(".error").html("Registration is successful, Automatic login."):$(".error").html("注册成功，自动登录中。"),setTimeout(function(){$.ajax({"type":"POST","url":url+"/api/v1/user/login","dataType":"json","data":i,"success":function(e){if(200===e.code){var o=api.getUser(e.data.token);getCookie("token",e.data.token,{"expires":1,"path":"/"}),null==o.name&&(o.name=""),getCookie("username",o.name,{"expires":30,"path":"/"}),getCookie("userId",o.id,{"expires":30,"path":"/"});var r=api.getSchool(o.school_info.id,i18nLanguage);if(null==r.name&&(r.name=""),getCookie("school",r.name,{"expires":30,"path":"/"}),getCookie("schoolId",r.id,{"expires":30,"path":"/"}),null==o.name){var t={"token":l,"user_id":o.id,"reciever_name":o.name,"reciever_phone":o.phone,"address":o.school_region_info.address,"is_default":"y","is_from_school":"y"};$.ajax({"type":"POST","url":url+"/api/v1/address/create","dataType":"json","data":t,"success":function(e){},"error":function(e,o,r){}})}isEnglish()?($(".welcome").html("Dear "+o.name+" , Welcome to "+r.name+" page."),$(".error").html("The login is successful, and the home page is entered after 2 seconds.")):($(".welcome").html("Dear "+o.name+"，欢迎访问"+r.name+"专属页面。"),$(".error").html("登录成功，2秒后进入首页。")),getCookie("localCart")&&$(".error").html("临时购物车存在商品，将批量加入本账户。")}else $(".error").html(e.msg)},"error":function(e,o,r){}})},2e3)):$(".error").html(e.detail)},"error":function(e,o,r){}})}else isEnglish()?$(".error").html("The password is illegal"):$(".error").html("密码不合法，输入5-15位数！");else isEnglish()?$(".error").html("The verification code is not in the correct format."):$(".error").html("验证码格式不正确。")})});