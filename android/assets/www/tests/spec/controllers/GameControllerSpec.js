describe("GameController", function() {
  var controller;

  beforeEach(function() {
	controller = Ext.ControllerManager.get('Game');
  });
	
  it("should set GameIndex as the active view for index actions", function() {
		Ext.reg('GameIndex', Ext.Panel);
		controller.index();
		expect(App.viewport.getActiveItem().xtype).toEqual('GameIndex');
  });
});