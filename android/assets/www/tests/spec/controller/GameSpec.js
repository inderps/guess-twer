describe("GameController", function() {
  var controller;
  var mockedMainView = {
  	innerItems: Array
  }
  
  beforeEach(function() {
		controller = App.controller.Game.prototype;
  });
	
  it("should initialize all the values on App load", function() {
		spyOn(Ext, 'create').andReturn('some-view-created');
		spyOn(controller, 'control').andReturn('some-controls-defined');
  		controller.init();
  		expect(controller.correctAnswer).toEqual(null);
		expect(controller.questionNumber ).toEqual(0);
		expect(controller.incorrectAnswers ).toEqual(0);
		expect(controller.main).toEqual('some-view-created');
		expect(controller.picker).toEqual('some-view-created');
  		expect(Ext.create).toHaveBeenCalled();
  });
 
   it("should setup the question on calling of start action", function() {
  		controller.incorrectAnswers = 0;
  		controller.questionNumber = 0;
  		controller.main = mockedMainView;
  		
  		spyOn(Ext.Viewport, 'setMasked');
  		spyOn(Ext.data.JsonP, 'request');
  		spyOn(Ext.Viewport, 'setActiveItem');
  		
  		controller.start();
  		
  		expect(controller.questionNumber).toEqual(1);
  		expect(Ext.Viewport.setMasked).toHaveBeenCalled();
  		expect(Ext.data.JsonP.request).toHaveBeenCalled();
  		expect(Ext.Viewport.setActiveItem).toHaveBeenCalled();
  });
  
   it("should show alert on Game Over", function() {
  		controller.incorrectAnswers = 3;
  		controller.questionNumber = 0;
  		controller.main = mockedMainView;
  		
  		spyOn(window, 'alert');
  		spyOn(Ext.Viewport, 'setMasked');
  		spyOn(Ext.data.JsonP, 'request');
  		spyOn(Ext.Viewport, 'setActiveItem');
  		
  		controller.start();
  		
  		expect(window.alert).toHaveBeenCalled();
  });  
  
  xit("should add picker to the view", function() {
  		confirm.picker = {
  			setValue:{},
			show: function(){}
  		};
  		
  		spyOn(Ext.Viewport, 'add');
  		
  		controller.guessButtonTap();
  		
  		expect(controller.picker.setValue).toHaveBeenCalled();
  		expect(Ext.Viewport.add).toHaveBeenCalledWith(controller.picker);
  		expect(controller.picker.show).toHaveBeenCalled();
  });  
  
});