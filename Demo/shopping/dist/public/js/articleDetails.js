$(function(){var t=GetRequest();api.getArticleInfo(t.id,"",i18nLanguage,function(t){$(".articleTitle").html(t.data.title),$(".articleDetails").html(t.data.content)})});