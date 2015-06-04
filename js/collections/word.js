define(['jquery', 'underscore', 'backbone', 'letterModel'], function($, _, Backbone, letter) {

	var api = 'http://randomword.setgetgo.com/get.php';

	var Word = Backbone.Collection.extend({

	  // Reference to this collection's model.
	  model: letter,

	  sync : function(method, collection, options) {
		options.dataType = "jsonp";
		return Backbone.sync(method, collection, options);
	  },


	  url: api,

	  parse: function(response) {
	    var letters = JSON.stringify(response.Word);
	    var actualWord = letters.replace('"', '').split('\\')[0];
	    var splitWord = actualWord.split('');

	    return splitWord;
	  }

	});

	//var myWord = new Word();

	//console.log(myWord);
	//myWord.fetch();

    return Word;
});