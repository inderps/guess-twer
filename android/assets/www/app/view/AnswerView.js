Ext.define('App.view.AnswerView', {
	extend: 'Ext.Panel',
	config: {
		fullscreen: true,
		title: 'Guess Twer',
		items: 
		[
			{
				xtype: 'titlebar',
            	title: 'hello',
            	docked: 'top',
			},
			{
				id:'answerImage',
				 html: '<img style="height: 100px; width: 100px;" src="http://www.sencha.com/assets/images/sencha-avatar-64x64.png" />',

            flex:1,
			},
			{
            	html: '<b>hello</b>',
            	flex:1,
			}
			
		]
	}
});