define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {

	var Game = Backbone.Model.extend({
		defaults: {
			guessedLetters: [],
			numberOfGuessesRemaining: 10
		},

		initialize: function () {
			this.on('failed', this.incorrectGuess);
		},

		incorrectGuess: function (letter) {
			console.log('incorrect: ' + letter);

			var newGuessedLetters = this.get('guessedLetters');

			if (!_.contains(newGuessedLetters, letter)) {
				var newIncorrectGuesses = this.get('numberOfGuessesRemaining') - 1;

				newGuessedLetters.push(letter);

				console.log(newIncorrectGuesses);

				this.set('numberOfGuessesRemaining', newIncorrectGuesses);
				this.set('guessedLetters', newGuessedLetters);
			}


		}
	});

    return Game;
});