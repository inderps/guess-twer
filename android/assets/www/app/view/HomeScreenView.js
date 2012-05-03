Ext.define('App.view.HomeScreenView', {
	extend: 'Ext.Panel',
	xtype: 'homeView',
	config: {
		fullscreen: true,
		title: 'Guess Twer',
		items: 
		[
			{
				xtype: 'titlebar',
            	title: 'My Home',
            	docked: 'top',
			},
			{
				xtype: 'button',
            	text: 'Play Game',
            	ui: 'normal',
            	id: 'playGameButton'
			},
			{
				xtype: 'button',
            	text: 'High Scores',
            	ui: 'normal',
            	id: 'highScoresButton'
			},
			{
				xtype: 'button',
            	text: 'Exit',
            	ui: 'normal',
            	id: 'exitButton1'
			}
		]
	}
});