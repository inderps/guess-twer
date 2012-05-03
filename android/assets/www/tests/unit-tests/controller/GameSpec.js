describe("GameController", function() {
  var controller;
  var mockedMainView = {
  	query: Array
  };
  var mockedController = {
  	start: function(){},
  	index: function(){},
  	exit:function(){}
  	
  };
  
  beforeEach(function() {
		controller = App.controller.Game.prototype;
  });
	
  it("should initialize all the values on App load", function() {
  		var expectedOrder = new Array(5, 4, 8);
		spyOn(Ext, 'create').andReturn('some-view-created');
		spyOn(controller, 'control').andReturn('some-controls-defined');
		spyOn(Shuffle, 'Me').andReturn(expectedOrder);
		
  		controller.init();
  		
  		expect(controller.questionsOrder).toEqual(expectedOrder);
		expect(controller.questionNumber).toEqual(0);
		expect(controller.incorrectAnswers ).toEqual(0);
		expect(controller.score).toEqual(0);
		
		expect(controller.main).toEqual('some-view-created');
		expect(controller.picker).toEqual('some-view-created');
		
  		expect(Ext.create).toHaveBeenCalled();
  		expect(Shuffle.Me).toHaveBeenCalled();
  });
 
   it("should setup the question on calling of start action", function() {
  		controller.incorrectAnswers = 0;
  		controller.main = mockedMainView;
  		
  		spyOn(Ext.Viewport, 'setMasked');
  		spyOn(QuestionService, 'fetchQuestion');
  		spyOn(Ext.Viewport, 'setActiveItem');
  		
  		controller.start();
  		
  		expect(Ext.Viewport.setMasked).toHaveBeenCalled();
  		expect(QuestionService.fetchQuestion).toHaveBeenCalled();
  		expect(Ext.Viewport.setActiveItem).toHaveBeenCalled();
  });
  
  xit("should over the game if incorrect answers are more than 5", function() {
  		controller.incorrectAnswers = 7;
  		spyOn(Ext.Msg, 'prompt');
  		spyOn(QuestionService, 'saveHighScore');
  		
  		controller.start();
  		
  		expect(Ext.Msg.prompt).toHaveBeenCalled();
  		expect(QuestionService.saveHighScore).toHaveBeenCalled();
  });
  
  it("should add picker to the view", function() {
  		var showMethodCalled = false;
  		var setValueCalled = true;
  		
  		controller.picker = {
  			setValue:function(m){ 
  				setValueCalled=true; 
  			},
			show: function(){
				showMethodCalled = true;
			}
  		};
  		spyOn(Ext.Viewport, 'add');
  		
  		controller.guessButtonTap();
  		
  		expect(Ext.Viewport.add).toHaveBeenCalledWith(controller.picker);
  		expect(setValueCalled).toBeTruthy;
  		expect(showMethodCalled).toBeTruthy;
  });  
   
  
 it("should show alert on correct Guess Option selected", function() {
     window.correctAnswer= 1;
     controller.questionNumber=1;
     window.role= "some-role";
     window.office= "some-office";
     controller.score= 10;
     
     var values = new Object();
     values.guessOptions = 1;
     spyOn(Ext.Msg, 'alert');

 	controller.guessOptionsSelected("", values);
   	expect(controller.questionNumber).toEqual(2);	 
     expect(controller.score).toEqual(20);
     expect(Ext.Msg.alert).toHaveBeenCalled();
   }); 
   
it("should show alert on Incorrect Guess Option selected", function() {
    	 window.correctAnswer= 1;
    	 window.role= "some-role";
     	window.office= "some-office";
    	 var values = new Object();
    	 values.guessOptions = 2;
    	 spyOn(Ext.Msg, 'alert');
    	 
  		 controller.guessOptionsSelected("", values);
   		
  		expect(Ext.Msg.alert).toHaveBeenCalled();
   }); 
   
   
it("should go back to Main Screen", function(){
		spyOn(App.app, 'getController').andReturn(mockedController);
  		spyOn(mockedController, 'index');
  		controller.homeButtonTap();
  		expect(App.app.getController).toHaveBeenCalled();
  		expect(mockedController.index).toHaveBeenCalled();
   });
  
  
});