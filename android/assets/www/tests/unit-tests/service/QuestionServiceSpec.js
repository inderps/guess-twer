describe("QuestionService", function() {
  var service;
  beforeEach(function() {
		service = QuestionService;
  });
	
  it("should fetch Complete Question from Server", function() {
		spyOn(Ext.data.JsonP, 'request').andReturn('some-response');
		
		service.fetchQuestion(1, function(result){
		});
		
  		expect(Ext.data.JsonP.request).toHaveBeenCalled();		  
  });
  
});