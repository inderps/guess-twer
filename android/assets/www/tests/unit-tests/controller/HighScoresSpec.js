describe("HighScoresController", function() {
  var controller;
  var mockedMainView = {
  	query: Array
  };
  var mockedController = {
  	index: function(){},
   };
  
  beforeEach(function() {
		controller = App.controller.HighScores.prototype;
  });
	
  it("should initialize HighScoresView on load", function() {
 		spyOn(Ext, 'create').andReturn('some-view-created');
		spyOn(controller, 'control').andReturn('some-controls-defined');
		
  		controller.init();
  		
		expect(controller.main).toEqual('some-view-created');		
  		expect(Ext.create).toHaveBeenCalled();
  });
  
  it("should set the HighScoresView as Active on Viewport", function() {
  		spyOn(Ext.Viewport, 'setActiveItem');
  		
  		spyOn(QuestionService, 'getHighScores');
  		controller.index();
  		expect(Ext.Viewport.setActiveItem).toHaveBeenCalled();
  		expect(QuestionService.getHighScores).toHaveBeenCalled();
  });
  
  it("should go back to Main Screen", function(){
		spyOn(App.app, 'getController').andReturn(mockedController);
  		spyOn(mockedController, 'index');
  		controller.homeButtonTap();
  		expect(App.app.getController).toHaveBeenCalled();
  		expect(mockedController.index).toHaveBeenCalled();
   });
 
  
});