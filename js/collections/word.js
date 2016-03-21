define([
	'backbone',
	'letterModel'
], function(
	Backbone,
	letter
) {
	var api = '/myjson.json',
		Word;

	Word = Backbone.Collection.extend({
	  // The model type this collection uses
	  "model": letter,

	  "url": api,

	  "parse": function(response) {
	  	// modify data before it is sent to the model
	  	// in this case choosing a random word from the data
	  	// from this array Backbone creates the letter models
	   	
	   	return response.words[Math.round(Math.random() * 100, 10)].split('');
	  }
	});

  return Word;
});
