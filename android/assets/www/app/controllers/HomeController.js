Ext.regController('Home', {
    index: function(){
        if ( ! this.indexView){
			this.indexView = this.render({
            xtype: 'HomeIndex',
			});
		}
		App.viewport.setActiveItem(this.indexView);
    },
});