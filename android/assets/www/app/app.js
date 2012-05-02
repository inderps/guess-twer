function mainLaunch() {

Ext.Loader.setConfig({
	enabled: true
});

Ext.application({

    name: 'App',
    requires: [
    	'App.view.HomeScreenView',
    	'App.view.GamePlayView',
    	'App.view.GuessPicker'
    	
    ],
	//phoneStartupScreen: 'image/phoneStart.png',
    //glossOnIcon: false,

    models: ['GuessImageModel', 'GuessOptionsModel'],
    stores: ['GuessImageStore', 'GuessOptionsStore'],
    views: ['HomeScreenView', 'GamePlayView', 'GuessPicker'],
    //appFloder: 'app',
    controllers: ['Home', 'Game'],
	launch: function(){
		var main = Ext.create('App.view.HomeScreenView');
		Ext.Viewport.setActiveItem(main);
	 }
});

}