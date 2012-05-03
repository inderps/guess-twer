var QuestionService = {
    fetchQuestion: function(questionNumber, callback) {
        var request = Ext.data.JsonP.request({
            	url: 'http://meghaagarggn:8080/question/get/' + questionNumber,
            	callbackKey: 'callback',
            success: function(result) {
            		callback(result);
            }
        }); 
    },
    
    saveHighScore: function(user, score, callback) {
    	var request = Ext.data.JsonP.request({
            	url: 'http://meghaagarggn:8080/setHighestScore',
            	callbackKey: 'callback',
            	params: {
                	userName: user,
                	score: score,
            	},
            success: function(result) {
            		callback(result);
            }
        }); 
    },
    
    getHighScores: function(callback) {
    	var request = Ext.data.JsonP.request({
            	url: 'http://meghaagarggn:8080/getThreeHighestScorers',
            	callbackKey: 'callback',
            success: function(result) {
            		callback(result);
            }
        }); 
    }
};
