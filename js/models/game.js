define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {

	var Game = Backbone.Model.extend({
		defaults: {
			// setting defualts will automatically set attributes on a model
			// saves setting manually on load
			guessedLetters: [],
			numberOfGuessesRemaining: 10
		},

		initialize: function () {
			this.on('failed', this.incorrectGuess);
		},

		resetGame: function () {
			this.set('guessedLetters', []);
			this.set('numberOfGuessesRemaining', 10);
			this.trigger('reset');
		},

		incorrectGuess: function (letter) {
			console.log('incorrect: ' + letter);

			var uniqueGuessedLetters = this.get('guessedLetters');

			if (!_.contains(uniqueGuessedLetters, letter)) {

				if(this.get('numberOfGuessesRemaining') === 1) {
					alert('game over');
					this.resetGame();

				} else {

					debugger;
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