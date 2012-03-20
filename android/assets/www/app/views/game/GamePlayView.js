App.views.GamePlay = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
			{
	text: 'Guess',
	itemId: 'guessButton'}]
    }],
	scroll: 'vertical',
	styleHtmlContent: true,
	fullscreen: true,
	style: 'background: red',
});
Ext.reg('GamePlay', App.views.GamePlay);
