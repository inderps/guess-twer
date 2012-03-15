App.views.GamePlay = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
					{ text: 'Guess',
					  itemId: 'guessButton',
					  ui: 'action',
					}
		]
    }],
	scroll: 'vertical',
	styleHtmlContent: true,
	fullscreen: true,
	style: 'background: #d8e2ef',
});
Ext.reg('GamePlay', App.views.GamePlay);
