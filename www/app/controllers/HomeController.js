Ext.regController('Home', {
    index: function(){
        if ( ! this.indexView){
			this.indexView = this.render({
            xtype: 'HomeIndex',
			});
		}
		this.application.viewport.setActiveItem(this.indexView);
    },
});