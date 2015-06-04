define(['jquery', 'underscore', 'backbone', 'letterModel'], function($, _, Backbone, letter) {

	var api = 'http://randomword.setgetgo.com/get.php',
		Word;

	Word = Backbone.Collection.extend({

	  // Reference to this collection's model.
	  model: letter,

	  sync : function(method, collection, options) {
		options.dataType = "jsonp";
		return Backbone.sync(method, collection, options);
	  },

	  url: api,

	  parse: function(response) {
	    var letters = JSON.stringify(response.Word),
	    	actualWord = letters.replace('"', '').split('\\')[0].split('');

	    return actualWord;
	  }

	});

	//var myWord = new Word();

	//console.log(myWord);
	//myWord.fetch();

    return Word;
});