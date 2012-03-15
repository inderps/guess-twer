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
		
		var guessButton = this.playView.query('#guessButton')[0];
		
		guessButton.setHandler(function(){
			if (!this.options) {
                this.options = new Ext.Picker({});
            }
            this.options.show();
		});
		App.viewport.setActiveItem(this.playView);
    },
});