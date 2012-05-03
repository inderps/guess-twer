Ext.define('App.controller.HighScores', {
	extend: 'Ext.app.Controller',
	config: {
	},
	init: function(){
		if (!this.main) {
			this.main = Ext.create('App.view.HighScoresView');
		}
		this.control({
			'#homeButton1': {
				tap: this.homeButtonTap
			}
		});
	},
	
	index: function() {	
		QuestionService.getHighScores(function(result){
					var highScoresStore = Ext.StoreMgr.lookup('HighScoresStore');
            		highScoresStore.removeAll();
                	highScoresStore.add(result);  
					highScoresStore.sync();
			});
		Ext.Viewport.setActiveItem(this.main, { type: 'slide', direction: 'left' });
	},
	
	
	homeButtonTap: function(){
		var homeController = App.app.getController('Home');  
		homeController.index(); 
	}
		
		
});