var QuestionService = {
    fetchQuestion: function(questionNumber, callback) {
        var request = Ext.data.JsonP.request({
            	url: 'http://www.machinebucket.com/mobileapp/guess.php',
            	callbackKey: 'callback',
            	params: {
                	question: questionNumber,
            	},
            success: function(result) {
            		callback(result);
            }
        }); 
    },
    
    saveHighScore: function(user, score, callback) {
    	var request = Ext.data.JsonP.request({
            	url: 'http://www.machinebucket.com/mobileapp/guess.php',
            	callbackKey: 'callback',
            	params: {
                	user: user,
                	score: score,
            	},
            success: function(result) {
            		callback(result);
            }
        }); 
    },
    
    getHighScores: function(callback) {
    	var request = Ext.data.JsonP.request({
            	url: 'http://www.machinebucket.com/mobileapp/guess.php',
            	callbackKey: 'callback',
            success: function(result) {
            		callback(result);
            }
        }); 
    }
};
