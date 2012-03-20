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
		guessButton.setHandler(function() {
	            if (!this.actions) {
                this.actions = new Ext.Picker({
		useTitles: true,
		slots: [
        {
            name : 'guess',
            title: 'Guess??',
            data : [
                {text: 'ABC', value: 'ABC'},
                {text: 'DEF', value: 'DEF'},
                {text: 'XYZ', value: 'dfd'},
                {text: 'JKJ', value: 'ddd'}
            ]
        }
    ],   
        listeners: {
            change: {
                fn: function(e){ 
				//console.log(this.getValue()['guess']);
				this.hide();
				 Ext.redirect('Game/result');
					
				}
            }}
});
            }
            this.actions.show();
	});
		App.viewport.setActiveItem(this.playView);
    },
	result: function(){
	if ( ! this.resultView){
			this.resultView = this.render({
            xtype: 'GameResult',
			});
		}
		App.viewport.setActiveItem(this.resultView);
		}
		
});