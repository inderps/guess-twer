App.views.ScoresHighest = Ext.extend(Ext.Panel, {
    html: "I am a High Scorer!!!",
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
});
Ext.reg('ScoresHighest', App.views.ScoresHighest);
