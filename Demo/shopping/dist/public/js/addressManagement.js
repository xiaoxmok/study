$(function(){login()||(location.href="login.html");var a=getCookie("token");function e(){$(".management ul").html(""),api.getAddressList(getCookie("userId")).forEach(function(a,e){var t;t="y"===a.is_default?'<a href="javascript:;" class="defalut">默认地址</a>':'<a href="javascript:;" data-name="'+a.id+'" class="setDefalut">设置默认</a>';var n='<li>\n                <div class="text">\n                    <span>'+a.reciever_name+"</span>\n                    <span>"+a.address+"</span>\n                    <span>"+a.country_code+"-"+a.reciever_phone+'</span>\n                </div>\n                <div class="operate">\n'+t+'                    <a href="./updateAddress.html?id='+a.id+'" class="edit">编辑</a>\n                    <a href="javascript:;" class="delete" data-name="'+a.id+'">删除</a>\n                </div>\n            </li>';$(".management ul").append(n)})}e(),$(".management").on("click",".setDefalut",function(){$(this).attr("data-name");$.ajax({"type":"POST","url":url+"/api/v1/address/update","dataType":"json","data":{"token":a,"id":$(this).attr("data-name"),"is_default":"y"},"success":function(a){200===a.code&&e()},"error":function(a,e,t){}})}),$(".management").on("click",".delete",function(){var a=$(this).attr("data-name");200===api.getAddressDelete(a).code&&e()})});