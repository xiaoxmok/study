var i18nLanguage,getCookie=function(e,i,t){if(void 0===i){var n=null;if(document.cookie&&""!=document.cookie)for(var o=document.cookie.split(";"),s=0;s<o.length;s++){if((u=jQuery.trim(o[s])).substring(0,e.length+1)==e+"="){n=decodeURIComponent(u.substring(e.length+1));break}}return n}t=t||{},null===i&&(i="",t.expires=-1);var a,r="";t.expires&&("number"==typeof t.expires||t.expires.toUTCString)&&("number"==typeof t.expires?(a=new Date).setTime(a.getTime()+60*t.expires*60*1e3):a=t.expires,r="; expires="+a.toUTCString());var d=t.path?"; path="+t.path:"",l=t.domain?"; domain="+t.domain:"",c=([u,r,d,l,c].join(""),t.secure?"; secure":""),u=[[e,"=",encodeURIComponent(i)].join(""),r,d,l,c].join("");document.cookie=u};function delAllCookie(){var e=new Date;e.setTime(-1e3);for(var i=document.cookie.split("; "),t=0;t<i.length;t++){var n=i[t].split("=");document.cookie=n[0]+"=''; expires="+e.toUTCString()+";path=/"}}function delCookie(e){var i=new Date;i.setTime(i.getTime()-1);var t=getCookie(e);null!=t&&(document.cookie=e+"="+t+";expires="+i.toUTCString()+";path=/")}getCookie("userLanguage")?i18nLanguage=getCookie("userLanguage"):getCookie("userLanguage",i18nLanguage="zh",{"expires":30,"path":"/"}),$(function(){var e="sz";getCookie("city")?(e=getCookie("city"),"zh"===i18nLanguage?"sz"===e?$(".address a").html("深圳"):$(".address a").html("上海"):"sz"===e?$(".address a").html("shenzhen"):$(".address a").html("shanghai")):getCookie("city",e,{"expires":30,"path":"/"}),$(document).bind("click",function(){$(".media-header .nav").slideUp(),$(".address ul").slideUp(),$(".service ul").slideUp()}),$(".address a").click(function(e){e.stopPropagation(e),$(".address ul").is(":hidden")?$(".address ul").slideDown():$(".address ul").slideUp()}),$(".service a").click(function(e){e.stopPropagation(e),$(".service ul").is(":hidden")?$(".service ul").slideDown():$(".service ul").slideUp()}),$(".address li").click(function(){var e=$(this).html(),i=$(this).attr("data-name");getCookie("city",i,{"expires":30,"path":"/"}),$(".address a").html(e),$(".address ul").hide()}),$(".media-header .icon").click(function(e){e.stopPropagation(),$(".media-header .nav").is(":hidden")?$(".media-header .nav").slideDown():$(".media-header .nav").slideUp()})});var urlL="",url="http://byod.1o24.com";function login(){return!!getCookie("token")}$(function(){$(".problem .title").click(function(){$(this).parent().find(".text").is(":hidden")?($(this).parent().find(".text").slideDown(),$(this).find("span").html("-")):($(this).parent().find(".text").slideUp(),$(this).find("span").html("+"))})});var ua=navigator.userAgent.toLocaleLowerCase(),isMobile=/iPhone|iPad|iPod|android|Windows Phone/gi.test(ua);function CheckMobile(e){return 0==e.search("^1(3|5|8)\\d{9}$")}function CheckNum(e){return 0==e.search("^[0-9]*$")}function CheckCode(e){return 0==e.search("^\\d{4}$")}function CheckEmail(e){return/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e)}function CheckPwd(e){return!!/^\s*[.A-Za-z0-9_-]{5,15}\s*$/.test(e)}function GetRequest(){var e=location.search,i=new Object;if(-1!=e.indexOf("?")){var t=e.substr(1);strs=t.split("&");for(var n=0;n<strs.length;n++)i[strs[n].split("=")[0]]=unescape(strs[n].split("=")[1])}return i}$(function(){if(login()){$(".login").hide(),isMobile||$(".logined").show();getCookie("token");$(".welcome").html("Dear "+getCookie("username")+",欢迎访问"+getCookie("school")+"专属页面。")}else $(".login").hide(),$(".loging").show(),$(".welcome").html("Dear ,请先登录。")});