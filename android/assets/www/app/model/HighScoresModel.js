Ext.define('App.model.HighScoresModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
				{ name: 'userName', type: 'string'},
				{ name: 'highestScore', type: 'string'}
			]
    }
});