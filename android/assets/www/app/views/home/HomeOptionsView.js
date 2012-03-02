App.views.HomeOptions = Ext.extend(Ext.Panel, {
    html: "<a href='#' class='menu-item'>Settings</a></br><a href='#' class='menu-item'>Help</a>",
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
});
Ext.reg('HomeOptions', App.views.HomeOptions);
