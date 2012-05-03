Ext.define('App.view.GamePlayView', {
	extend: 'Ext.Container',
	config: {
		fullscreen: true,
		layout: 'vbox',
		items: 
		[
		{
				xtype: 'toolbar',
            	title: 'Guess-Twer?',
            	docked: 'top',
            	defaults: {
                		iconMask: true
            	},
            	items: [
                	{ iconCls: 'home',
                	  id: 'homeButton',
                		docked: 'right'
                	}]
				},
			{
			id: 'guessImage',
			store: 'GuessImageStore',
            tpl: '<img src="{imageUrl}" width="100%"/>',
            style: 'background-color: #5E99CC;',
            flex: 1
        },
        {
			xtype: 'button',
            text: 'Guess',
            ui: 'normal',
            id: 'guessButton',
        }
		]
	}
});