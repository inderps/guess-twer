Ext.define('App.controller.Game', {
	extend: 'Ext.app.Controller',
	views: ['GamePlayView'],
	config: {
	},
	init: function(){	
		this.setupGame();	
		if (!this.main) {
			this.main = Ext.create('App.view.GamePlayView');
		}
		if (!this.picker) {
			this.picker = Ext.create('App.view.GuessPicker');
		}
		
		this.control({
			'#guessButton': {
				tap: this.guessButtonTap
			},
			'#homeButton': {
				tap: this.homeButtonTap
			},
			picker: {
				change: this.guessOptionsSelected
			}
		});
	},
	
	setupGame: function (){
		this.questionsOrder = Shuffle.Me(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
		this.questionNumber = 0;
		this.incorrectAnswers = 0;
		this.score = 0;
	},
	
	start: function() {
		if(this.incorrectAnswers > 5) {
			var score = this.score;
			Ext.Msg.prompt('Game Over (Your Score: ' + score + ')', 'Please enter your EmailId:', function(e, user) {
    			QuestionService.saveHighScore(user, score, function(result){
					var homeController = App.app.getController('Home');  
					homeController.index(); 
					return;
			});
			});
		}
			var image = this.main.query('#guessImage')[0];
			
			Ext.Viewport.setMasked(true);
			
			QuestionService.fetchQuestion(this.questionsOrder[this.questionNumber], function(result){
					Ext.Viewport.setMasked(false);
            		var guessOptionsStore = Ext.StoreMgr.lookup('GuessOptionsStore');
            		guessOptionsStore.removeAll();
                	guessOptionsStore.add(result.guessOptions);  
					guessOptionsStore.sync();
            
                	image.setData({
                                imageUrl : result.person.imageUri
                    });	
                	correctAnswer = result.person.name;
                	role = result.person.role;
                	office = result.person.office;
			});
			
		Ext.Viewport.setActiveItem(this.main, { type: 'slide', direction: 'left' });
	},
	
	guessButtonTap: function() { 
				this.picker.setValue({
					guessOptions: null
				});
				Ext.Viewport.add(this.picker);
				this.picker.show();      
	},
		
	guessOptionsSelected: function(e, values) { 
				this.questionNumber+=1;
				var answer = 'Incorrect Answer!!!';		
				if(values.guessOptions == correctAnswer) {
						this.score+=10;
						answer = 'Correct Answer!!!'
					}
				else {
					this.incorrectAnswers+=1;
				}	
				Ext.Msg.alert(answer, correctAnswer + ' is working as a ' + role + ' in ' + office + ' office', Ext.emptyFn);
				this.start();		
	},	 
	
	homeButtonTap: function(){
		var homeController = App.app.getController('Home');  
		homeController.index(); 
	}
		
		
});