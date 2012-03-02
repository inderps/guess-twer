Ext.regController('Game', {
    index: function(){
       if ( ! this.indexView){
			this.indexView = this.render({
            xtype: 'GameIndex',
			});
		}
		App.viewport.setActiveItem(this.indexView);
    },
});