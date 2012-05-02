describe("GameController", function() {
  var controller;
  var mockedMainView = {
  	query: Array
  }
  
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
   
   
xit("should exit the game", function(){
	window.device=null;
  	 spyOn(window.device, 'exitApp');
  	 controller.exitButtonTap();
  	 expect(window.device.exitApp).toHaveBeenCalled();
   });
  
  
});