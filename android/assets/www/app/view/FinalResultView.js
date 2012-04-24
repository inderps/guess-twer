Ext.define('App.view.FinalResultView', {
	extend: 'Ext.Container',
	config: {
		fullscreen: true,
		layout: 'vbox',
		items: 
		[
		{
			id: 'guessImage',
			store: 'GuessImageStore',
            tpl: '<img src="{imageUrl}" width="100%"/>',
            style: 'background-color: #5E99CC;',
            flex: 1
        },
        {
			xtype: 'button',
            text: 'Guess Me',
            ui: 'normal',
            id: 'guessButton',
        }
		]
	}
});