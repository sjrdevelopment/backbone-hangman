define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {

	var Game = Backbone.Model.extend({
		defaults: {
			// setting defualts will automatically set attributes on a model
			// saves setting manually on load
			guessedLetters: [],
			numberOfGuessesRemaining: 6
		},

		initialize: function (attributes, options) {

			this.getNewWord();
			
			this.on('failed', this.incorrectGuess);
		},

		getNewWord: function() {
			// Invoke the fetch method of the Word collection
			// this.get('word').fetch({
			// 	success: _.bind(function(data) {
			// 		debugger;
			// 		// emit event to view to render
			// 		this.trigger('wordHappened');

			// 	}, this)
			// });

			this.get('word').fetch({
				success: _.bind(this.trigger, this, 'wordHappened')
			});
		},

		resetGame: function () {
		
			this.set('guessedLetters', []);
			this.set('numberOfGuessesRemaining', this.defaults.numberOfGuessesRemaining);
			this.get('word').reset();
			debugger;
			this.getNewWord();
		},

		incorrectGuess: function (letter) {
			console.log('incorrect: ' + letter);

			var uniqueGuessedLetters = this.get('guessedLetters');

			if (!_.contains(uniqueGuessedLetters, letter)) {

				if(this.get('numberOfGuessesRemaining') === 1) {
					alert('game over, word was ' + this.get('word').models.map(function(letterModel, index) {
						return letterModel.getCharacter()
					}).join(''));
					this.resetGame();

				} else {

				
					var newIncorrectGuesses = this.get('numberOfGuessesRemaining') - 1;

					uniqueGuessedLetters.push(letter);

					console.log(newIncorrectGuesses);

					this.set('numberOfGuessesRemaining', newIncorrectGuesses);
					this.set('guessedLetters', uniqueGuessedLetters);
				}
			}


		}
	});

    return Game;
});