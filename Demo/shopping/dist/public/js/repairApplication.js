$(function(){login()||(location.href="login.html");var o=getCookie("token"),e=api.getUser(o);$('.radio[name="type"]').click(function(){var e=$(this).val();console.log(e),"self"===e?($(".serCon").hide(),$("#self").show()):"door"===e&&($(".serCon").hide(),$("#door").show())});var l=[],a=[];function n(e,i){$.ajax({"type":"POST","url":url+"/api/v1/system/image-upload","dataType":"json","contentType":!1,"processData":!1,"data":e,"success":function(e){200===e.code&&i(e.data)},"error":function(){}})}function t(e){$(".deviceChild").html(""),$.ajax({"type":"GET","url":url+"/api/v1/category/get?id="+e,"dataType":"json","success":function(e){if(200===e.code){var i=e.data.children;if(0===i.length)return void $(".deviceChild").hide();i.forEach(function(e,i){var a='<option value="'+e.id+'">'+e.name+"</option>";$(".deviceChild").append(a),$(".deviceChild").show("")})}},"error":function(){}})}function s(e){$(".faultChild").html(""),$.ajax({"type":"GET","url":url+"/api/v1/category/get?id="+e,"dataType":"json","success":function(e){if(200===e.code){var i=e.data.children;if(0===i.length)return void $(".faultChild").hide();i.forEach(function(e,i){var a='<option value="'+e.id+'">'+e.name+"</option>";$(".faultChild").append(a),$(".faultChild").show("")})}},"error":function(){}})}$("#self .file").change(function(){var i=$(this),e=new FormData;e.append("file",$(this).get(0).files[0]),n(e,function(e){i.parent().find(".imgshow").attr("src",e[0].url),i.parent().find(".imgshow").attr("data-name",e[0].id),l.push(e[0].id)})}),$("#door .file").change(function(){var i=$(this),e=new FormData;e.append("file",$(this).get(0).files[0]),n(e,function(e){i.parent().find(".imgshow").attr("src",e[0].url),i.parent().find(".imgshow").attr("data-name",e[0].id),a.push(e[0].id)})}),$.ajax({"type":"GET","url":url+"/api/v1/category/index?type=device","dataType":"json","success":function(e){200===e.code&&e.data.forEach(function(e,i){var a='<option value="'+e.id+'">'+e.name+"</option>";$(".device").append(a),0===i&&t(e.id)})},"error":function(){}}),$(".device").bind("change",function(){t($(this).find("option:selected").val())}),$.ajax({"type":"GET","url":url+"/api/v1/category/index?type=fault","dataType":"json","success":function(e){200===e.code&&e.data.forEach(function(e,i){var a='<option value="'+e.id+'">'+e.name+"</option>";$(".fault").append(a),0===i&&s(e.id)})},"error":function(){}}),$(".fault").bind("change",function(){s($(this).find("option:selected").val())}),api.getRepairInfo(e.phone,function(e){var i=e.device_infos,a=e.coupon_infos;0!==i.length&&i.forEach(function(e,i){$(".sku_id").append('<p><input type="radio" name="addr" id="device4" checked=""><label for="device4"><span>型号：macbook air 序列号：120000 购买时间：2018-05-25</span></label></p>')}),0!==a.length&&($("#user_coupon_id").html(""),a.forEach(function(e,i){var a;a=isEnglish()?'<a href="javascript:;" class="ticket1" data-name="'+e.id+'">\n                        <div class="up">\n                            <div class="img"></div>\n                            <p>'+e.type+'</p>\n                        </div>\n                        <div class="down">\n                            <p>Unused</p>\n                        </div>\n                    </a>':'<a href="javascript:;" class="ticket1" data-name="'+e.id+'">\n                        <div class="up">\n                            <div class="img"></div>\n                            <p>'+{"repair":"维修券"}[e.type]+'</p>\n                        </div>\n                        <div class="down">\n                            <p>未使用</p>\n                        </div>\n                    </a>',$("#user_coupon_id").append(a)}))});var r=[];$("#user_coupon_id").on("click",".ticket1",function(){if($(this).hasClass("active")){$(this).removeClass("active");var a=$(this);r.forEach(function(e,i){e===a.attr("data-name")&&r.splice(i,1)})}else $(this).addClass("active"),r.push($(this).attr("data-name"))}),$(".submit").click(function(){var e={},i=[],a=[],n=$('#type input[name="type"]:checked').val();if("self"===n){i.push($("#self .device option:selected").val()),i.push($("#self .deviceChild option:selected").val()),a.push($("#self .fault option:selected").val()),a.push($("#self .faultChild option:selected").val());var t=$("#self .phone").val();if(!CheckMobile(t))return void(isEnglish()?$(".error").html("Phone format is incorrect."):$(".error").html("手机格式不正确."));0<l.length&&(e.img_ids=l.join(",")),0<$("#self .param").val().length&&(e.param=$("#self .param").val()),0<$("#self .description").val().length&&(e.description=$("#self .description").val()),0<$("#self .email").val().length&&(e.email=$("#self .email").val()),e={"token":o,"type":n,"device_category":i.join(","),"fault_category":a.join(","),"phone":t,"lang":i18nLanguage}}else{i.push($("#door .device option:selected").val()),i.push($("#door .deviceChild option:selected").val()),a.push($("#door .fault option:selected").val()),a.push($("#door .faultChild option:selected").val());t=$("#door .phone").val();if(!CheckMobile(t))return void(isEnglish()?$(".error").html("Phone format is incorrect."):$(".error").html("手机格式不正确."));0<l.length&&(e.img_ids=l.join(",")),0<$("#door .param").val().length&&(e.param=$("#self .param").val()),0<$("#door .description").val().length&&(e.description=$("#self .description").val()),0<$("#door .email").val().length&&(e.email=$("#self .email").val()),0<r.length&&(e.user_coupon_id=r.join(",")),$("#sku_id").has("input"),e={"token":o,"type":n,"device_category":i.join(","),"fault_category":a.join(","),"phone":t,"lang":i18nLanguage}}$.ajax({"type":"POST","url":url+"/api/v1/repair/create","dataType":"json","data":e,"success":function(e){200===e.code&&(isEnglish()?$(".error").html("Submitted successfully."):$(".error").html("提交成功。"),setTimeout(function(){$(".solution .content,.solution .title").hide(),$(".success").show(),$(".success .order_no span").html(e.data.repair_no)},1e3))},"error":function(){}})})});