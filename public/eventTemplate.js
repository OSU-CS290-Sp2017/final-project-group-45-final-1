(function(){
	var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['event'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"event\">\n	<div class=\"event-content\">\n	<p class=\"event-date\"\n"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\n		</p>\n		<p class=\"event-content\"\n
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"event","hash":{},"data":data}) : helper)))
    + "</a>\n    		</p>\n  	</div>\n</article>\n\n";
},"useData":true});

})();
