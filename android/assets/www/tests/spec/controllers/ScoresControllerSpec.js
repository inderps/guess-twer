describe("ScoresController", function() {
  var controller;

  beforeEach(function() {
	controller = Ext.ControllerManager.get('Scores');
  });
	
  it("should set ScoresHighest as the active view for the action 'highest'", function() {
		Ext.reg('ScoresHighest', Ext.Panel);
		controller.highest();
		expect(App.viewport.getActiveItem().xtype).toEqual('ScoresHighest');
  });
});