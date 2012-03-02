Ext.regController('Home', {
    index: function(){
        if ( ! this.indexView){
			this.indexView = this.render({
            xtype: 'HomeIndex',
			});
		}
		App.viewport.setActiveItem(this.indexView);
    },
    
   options: function()
{
    if ( ! this.optionsView)
    {
        this.optionsView = this.render({
            xtype: 'HomeOptions',
        });
    }
    App.viewport.setActiveItem(this.optionsView);
},	 
});