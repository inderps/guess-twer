describe("GameController", function() {
  var controller;
	
  beforeEach(function() {
	controller = Ext.ControllerManager.get('Game');
	somePanel = new Ext.extend(Ext.Panel, {
				dockedItems: [{
						xtype: 'toolbar',
						items: [{ itemId: 'guessButton'}]
				}]
		});
    Ext.reg('GamePlay', somePanel);
  });
	
  it("should set GameIndex as the active view for index actions", function() {
		Ext.reg('GameIndex', Ext.Panel);
		controller.index();
		expect(App.viewport.getActiveItem().xtype).toEqual('GameIndex');
  });

  it("should set GamePlay as the active view for Play action", function() {
		controller.play();
		expect(App.viewport.getActiveItem().xtype).toEqual('GamePlay');
  });
  
    it("should display Options on click of Guess Button", function() {
		controller.play();
		var guessButton = App.viewport.getActiveItem().query('#guessButton')[0];
		guessButton.callHandler();
		expect(guessButton.Options).toEqual('GamePlay');
  });
});