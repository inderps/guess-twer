Ext.define('App.view.HighScoresView', {
	extend: 'Ext.Container',
	config: {
		fullscreen: true,
		layout: 'fit',
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
                	  id: 'homeButton1',
                		docked: 'right'
                	}]
				},
				 {
                xtype: 'list',
                itemTpl: '{userName} ({highestScore})',
   				store: 'HighScoresStore',
            },
		]
	}
});