Ext.regApplication({
    name: 'App',
	defaultUrl: 'Home/index',
    launch: function() {
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
        //if (!device || !this.launched) {return;}
		this.viewport = new App.views.Viewport();
        console.log('mainLaunch');
    }
});