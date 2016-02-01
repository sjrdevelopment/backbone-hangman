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
	    console.log(response.title);
	    var actualWord = response.title.split('');

	    return actualWord;
	  }

	});

  return Word;
});
