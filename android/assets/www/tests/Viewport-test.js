App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    dockedItems: [
        {
            xtype: 'toolbar',
            title: 'Guess-Twer',
        },
    ],
});