define(['jquery', 'underscore', 'backbone', 'letterModel'], function($, _, Backbone, letter) {

	var api = 'http://localhost:8888/myjson.json',
	//	var api = 'http://backbonehangman.herokuapp.com/random',
		Word;

	Word = Backbone.Collection.extend({
	  // Reference to this collection's model.
	  "model": letter,

	  "url": api,

	  "parse": function(response) {
        debugger;
	    var actualWord = response.words[Math.round(Math.random() * 47, 10)].split('');

	    return actualWord;
	  }

	});

  return Word;
});
