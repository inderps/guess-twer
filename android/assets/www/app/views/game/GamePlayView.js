App.views.GamePlay = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
			{
	text: 'Guess',
	handler: function() {
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
                fn: function(e){ Ext.Msg.alert(e.value()); }
            }}
});
            }
            this.actions.show();
	}
}
]
    }],
	scroll: 'vertical',
	styleHtmlContent: true,
	fullscreen: true,
	style: 'background: red',
});
Ext.reg('GamePlay', App.views.GamePlay);
