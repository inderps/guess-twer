App.views.HomeIndex = Ext.extend(Ext.Panel, {
    html: "<a href='#Game/index' class='menu-item'>Play Game</a></br><a href='#Home/options' class='menu-item'>Options</a></br><a href='#Scores/highest' class='menu-item'>High Scores</a></br>",
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
});
Ext.reg('HomeIndex', App.views.HomeIndex);
