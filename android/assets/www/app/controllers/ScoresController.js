Ext.regController('Scores', {
    highest: function(){
       if ( ! this.highestView){
			this.highestView = this.render({
            xtype: 'ScoresHighest',
			});
		}
		App.viewport.setActiveItem(this.highestView);
    },
});