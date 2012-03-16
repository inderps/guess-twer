describe("GameController", function() {
  var controller;
	
  beforeEach(function() {
	controller = Ext.ControllerManager.get('Game');
    Ext.reg('GamePlay', Ext.Panel);
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
  
});