describe("HomeController", function() {
  var controller;
  var mockedGameController = {
  	start: function(){}
  }
  
  beforeEach(function() {
		controller = App.controller.Home.prototype;
  });
	
  it("should call Start Action of Game Controller on PlayGame Button Tap", function() {
  		spyOn(App.app, 'getController').andReturn(mockedGameController);
  		spyOn(mockedGameController, 'start');
  		controller.onPlayGameTap();
  		expect(App.app.getController).toHaveBeenCalled();
  		expect(mockedGameController.start).toHaveBeenCalled();
  });
 
});