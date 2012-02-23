App.views.HomeIndex = Ext.extend(Ext.Panel, {
    html: "test",
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
});
Ext.reg('HomeIndex', App.views.HomeIndex);