/**
 * @fileOverview \u6811\u5f62\u9009\u62e9\u5668\uff0c\u5355\u9009\u4f7f\u7528\u9009\u4e2d\uff0c\u591a\u9009\u4f7f\u7528\u52fe\u9009
 * @ignore
 */
define(
		"bui/extensions/treepicker",
		[ "bui/common", "bui/picker", "bui/tree" ],
		function(e) {
			"use strict";
			var t = e("bui/common"), n = e("bui/picker").ListPicker, r = e("bui/tree"), i = n
					.extend(
							{
								setSelectedValue : function(e) {
									if(!e){return;}
									e = e || "";
									var r = this, i = r.get("tree");
									if (r.get("selectStatus") === "selected")
										e && i.expandNode(e),
												n.prototype.setSelectedValue
														.call(r, e);
									else {
										i.clearAllChecked();
										var s = e.split(",");
										t.each(s, function(e) {
											var node = i.findNode(e);
											i.setNodeChecked(node,true);
										})
									}
								},
								getSelectedValue : function() {
									var e = this, r = e.get("tree");
									if (e.get("selectStatus") === "selected")
										return n.prototype.getSelectedValue
												.call(e);
									var i = r.getCheckedNodes();
									return i = e._getFilterNodes(i), t.Array
											.map(i, function(e) {
												return e.id
											}).join(",")
								},
								getSelectedText : function() {
									var e = this, r = e.get("tree");
									if (e.get("selectStatus") === "selected")
										return n.prototype.getSelectedText
												.call(e);
									var i = r.getCheckedNodes();
									return i = e._getFilterNodes(i), t.Array
											.map(i, function(e) {
												return e.text
											}).join(",")
								},
								_getFilterNodes : function(e) {
									var n = this, r = n.get("filter");
									return r && (e = t.Array.filter(e, r)), e
								}
							},
							{
								ATTRS : {
									defaultChildClass : {
										value : "tree-list"
									},
									selectStatus : {
										value : "selected"
									},
									changeEvent : {
										getter : function() {
											return this.get("selectStatus")
													+ "change"
										}
									},
									hideEvent : {
										getter : function(e) {
											return this.get("selectStatus") === "checked" ? null
													: e
										}
									},
									filter : {},
									tree : {
										getter : function() {
											return this.get("children")[0]
										}
									}
								}
							}, {
								xclass : "tree-picker"
							});
			return i
		});
