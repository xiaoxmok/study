$(function(){if(login()){var a=api.getUser(getCookie("token")),e=api.getSchool(a.school_info.id,i18nLanguage);getCookie("school",e.name,{"expires":30,"path":"/"});var i=getCookie("username");getCookie("username").length<=0?(i="",isEnglish()?$(".welcome").html("Dear "+getCookie("account")+", Welcome to "+getCookie("school")+" page."):$(".welcome").html("Dear "+getCookie("account")+", 欢迎访问"+getCookie("school")+"专属页面。")):isEnglish()?$(".welcome").html("Dear "+i+", Welcome to "+getCookie("school")+" page."):$(".welcome").html("Dear "+i+", 欢迎访问"+getCookie("school")+"专属页面。")}$.ajax({"type":"GET","url":url+"/api/v1/banner/index","dataType":"json","success":function(a){if(200==a.code){var e=a.data;$(".swiper-wrapper").html(""),e.forEach(function(a,e){var i='<div class="swiper-slide">\n                <a href="'+a.link+'"><img src="'+a.img_info.url+'" alt=""></a>\n            </div>';$(".swiper-wrapper").append(i)});new Swiper(".swiper-container",{"speed":1e3,"autoplay":{"delay":3e3},"loop":!0,"pagination":{"el":".swiper-pagination"}})}},"error":function(a,e,i){console.log(a,e,i)}}),$.ajax({"type":"GET","url":url+"/api/v1/category/index?type=goods&lang="+i18nLanguage,"dataType":"json","async":!1,"success":function(a){var e;200===a.code&&(e=isEnglish()?'<li class="all active" data-name="0">All</li>':'<li class="all active" data-name="0">全部</li>',$(".nav .left ul").append(e),a.data.forEach(function(a,e){if(0===a.parent_id){var i=[];i.push(a.id),a.children.forEach(function(a,e){i.push(a.id)});var t='<li class="mac" data-name="'+i.join(",")+'">'+a.name+"</li>";$(".nav .left ul").append(t)}}))},"error":function(){}});function t(a){$(".goods .content ul").html("");var e=a.data,i=a.extra;e.forEach(function(a,e){var i,t;if(t=null!==a.summary?a.summary:"Not described",isEnglish()){i=login()?'<p class="price"><span>School Special Offer：</span><em>￥'+toPrice(a.school_price)+"</em></p>":'<p class="price"><span>Education Special Offer：</span><em>￥'+toPrice(a.education_price)+"</em></p>";var n='<li>\n                    <a href="./product.html?id='+a.id+'">\n                        <img src="'+a.img_infos[0].url+'" alt="">\n                        <div class="con">\n                            <p class="Title">'+a.name+'</p>\n                            <p class="description">'+t+'</p>\n                            <p class="price"><span>MSRP：</span><del>￥'+toPrice(a.price)+"</del></p>\n"+i+"                        </div>\n                    </a>\n                </li>"}else{i=login()?'<p class="price"><span>学校优惠价：</span><em>￥'+toPrice(a.school_price)+"</em></p>":'<p class="price"><span>教育优惠价：</span><em>￥'+toPrice(a.education_price)+"</em></p>";n='<li>\n                    <a href="./product.html?id='+a.id+'">\n                        <img src="'+a.img_infos[0].url+'" alt="">\n                        <div class="con">\n                            <p class="Title">'+a.name+'</p>\n                            <p class="description">'+t+'</p>\n                            <p class="price"><span>常规价格：</span><del>￥'+toPrice(a.price)+"</del></p>\n"+i+"                        </div>\n                    </a>\n                </li>"}$(".goods .content ul").append(n)}),$(".goods .page #page").val(i.page+"/"+i.last_page)}$(".goods .content ul").html("<li>Loading...</li>"),api.getGoodsList(0,1,20,"%2Bsale",i18nLanguage,t),$(".nav .left li").click(function(){$(".nav .left li").removeClass("active"),$(this).addClass("active");var a=$(this).attr("data-name");$(".goods .content ul").html("<li>Loading...</li>"),api.getGoodsList(a,1,20,"%2Bsale",i18nLanguage,t)}),$(".nav .right .sales").click(function(){var a,e=$(".nav .left .active").attr("data-name");$(this).hasClass("active")?(a="-sale",$(this).removeClass("active")):(a="%2Bsale",$(".nav .right li").removeClass("active"),$(this).addClass("active")),api.getGoodsList(e,1,20,a,i18nLanguage,t)}),$(".nav .right .price").click(function(){var a,e=$(".nav .left .active").attr("data-name");$(this).hasClass("active")?(a="-price",$(this).removeClass("active")):(a="%2Bprice",$(".nav .right li").removeClass("active"),$(this).addClass("active")),api.getGoodsList(e,1,20,a,i18nLanguage,t)}),$(".nav .right .addedTime").click(function(){var a,e=$(".nav .left .active").attr("data-name");$(this).hasClass("active")?(a="-created_at",$(this).removeClass("active")):(a="%2Bcreated_at",$(".nav .right li").removeClass("active"),$(this).addClass("active")),api.getGoodsList(e,1,20,a,i18nLanguage,t)}),$(".goods .page #first").click(function(){var a=$(".nav .left .active").attr("data-name");api.getGoodsList(a,1,20,"%2Bprice",i18nLanguage,t)}),$(".goods .page #last").click(function(){var a=$(".nav .left .active").attr("data-name"),e=$(".goods .page #page").val().split("/");api.getGoodsList(a,e[1],20,"%2Bprice",i18nLanguage,t)}),$(".goods .page #left").click(function(){var a=$(".nav .left .active").attr("data-name"),e=$(".goods .page #page").val().split("/");"1"===e[0]?api.getGoodsList(a,1,20,"%2Bprice",i18nLanguage,t):api.getGoodsList(a,e[0]-1,20,"%2Bprice",i18nLanguage,t)}),$(".goods .page #right").click(function(){var a=$(".nav .left .active").attr("data-name"),e=$(".goods .page #page").val().split("/");e[0]+1>e[1]?api.getGoodsList(a,e[1],20,"%2Bprice",i18nLanguage,t):api.getGoodsList(a,e[0]+1,20,"%2Bprice",i18nLanguage,t)})});