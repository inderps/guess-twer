Ext.define('App.store.HighScoresStore', {
    extend: 'Ext.data.Store',
    config: {
    model: 'App.model.HighScoresModel',
     autoLoad: true,
        autoSync: true
   }
});