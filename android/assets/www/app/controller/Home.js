Ext.define('App.controller.Home', {
	extend: 'Ext.app.Controller',
	views: ['HomeScreenView'],
	config: {

	},
	init: function(){
		if (!this.main) {
			this.main = Ext.create('App.view.HomeScreenView');
		}
		this.control({
			'#playGameButton': {
				tap: this.onPlayGameTap
			},
			'#exitButton1': {
				tap: this.onExitGameTap
			},
			'#highScoresButton': {
				tap: this.onHighScoresButtonTap
			}
		});

	},
		index: function() {
			Ext.Viewport.setActiveItem(this.main);
		},
		onPlayGameTap: function() {
			   var gameController = App.app.getController('Game');  
			   gameController.setupGame();
			   gameController.start();          
		} ,
		onExitGameTap: function() {
			   var gameController = App.app.getController('Game');  
			   gameController.exit();          
		},
		onHighScoresButtonTap: function() {
			   var highScoresController = App.app.getController('HighScores');  
			   highScoresController.index();          
		}  
		
});