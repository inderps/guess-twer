Ext.define('App.controller.Home', {
	extend: 'Ext.app.Controller',
	views: ['HomeScreenView'],
	config: {

	},
	init: function(){
		this.control({
			'#playGameButton': {
				tap: this.onPlayGameTap
			}
		});

	},
		onPlayGameTap: function() {
			   var gameController = App.app.getController('Game');  
			   gameController.start();          
		} 
});