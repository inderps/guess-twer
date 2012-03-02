App.views.GameIndex = Ext.extend(Ext.Panel, {
    html: "<a href='#' class='menu-item'>New Game</a></br><a href='#' class='menu-item'>Levels</a>",
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
});
Ext.reg('GameIndex', App.views.GameIndex);
