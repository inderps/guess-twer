Ext.regController('Game', {
    index: function(){
       if ( ! this.indexView){
			this.indexView = this.render({
            xtype: 'GameIndex',
			});
		}
		App.viewport.setActiveItem(this.indexView);
    },
	
	play: function(){
       if ( ! this.playView){
			this.playView = this.render({
            xtype: 'GamePlay',
			});
		}
		App.viewport.setActiveItem(this.playView);
    },
});