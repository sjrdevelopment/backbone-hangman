define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {

	var Game = Backbone.Model.extend({
		defaults: {
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

			var newGuessedLetters = this.get('guessedLetters');

			if (!_.contains(newGuessedLetters, letter)) {

				if(this.get('numberOfGuessesRemaining') === 1) {
					alert('game over');
					this.resetGame();

				} else {

					var newIncorrectGuesses = this.get('numberOfGuessesRemaining') - 1;

					newGuessedLetters.push(letter);

					console.log(newIncorrectGuesses);

					this.set('numberOfGuessesRemaining', newIncorrectGuesses);
					this.set('guessedLetters', newGuessedLetters);
				}
			}


		}
	});

    return Game;
});