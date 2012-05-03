function mainLaunch() {

Ext.Loader.setConfig({
	enabled: true
});

Ext.application({

    name: 'App',
    requires: [
    	'App.view.HomeScreenView',
    	'App.view.GamePlayView',
    	'App.view.GuessPicker',
    	'App.view.HighScoresView'
    	
    ],
	//phoneStartupScreen: 'image/phoneStart.png',
    //glossOnIcon: false,

    models: ['GuessImageModel', 'GuessOptionsModel', 'HighScoresModel'],
    stores: ['GuessImageStore', 'GuessOptionsStore', 'HighScoresStore'],
    views: ['HomeScreenView', 'GamePlayView', 'GuessPicker', 'HighScoresView'],
    //appFloder: 'app',
    controllers: ['Home', 'Game', 'HighScores'],
	launch: function(){
			var homeController = App.app.getController('Home');  
			homeController.index(); 
	 }
});

}