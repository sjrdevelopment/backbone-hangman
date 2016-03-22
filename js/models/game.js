define(['backbone', 'underscore'], function(Backbone, _) {

	var Game = Backbone.Model.extend({
		defaults: {
			// setting defualts will automatically set attributes on a model
			// saves setting manually on load
			guessedLetters: [],
			numberOfGuessesRemaining: 6
		},

		initialize: function (attributes, options) {
			this.getNewWord();
			this.on('incorrectGuess', this.onIncorrectGuess);
			this.on('correctGuess', this.onCorrectGuess);
		},

		getNewWord: function() {
			this.get('word').fetch({
				success: _.bind(function(data) {
					this.set('numberOfHiddenLetters', this.get('word').length);
					this.trigger('wordReady');
				}, this)
			});
		},

		resetGame: function () {
			this.set('guessedLetters', []);
			this.set('numberOfGuessesRemaining', this.defaults.numberOfGuessesRemaining);
			this.get('word').reset();

			this.getNewWord();
		},

		onIncorrectGuess: function (letter) {
			var uniqueGuessedLetters = this.get('guessedLetters');

			// we only want to record unique incorrect guesses
			if (!_.contains(uniqueGuessedLetters, letter)) {

				if (this.get('numberOfGuessesRemaining') === 1) {
					alert('game over, the word was ' + this.get('word').models.map(function(letterModel, index) {
						return letterModel.getCharacter()
					}).join(''));
					this.resetGame();

				} else {
					var newIncorrectGuesses = this.get('numberOfGuessesRemaining') - 1;
					uniqueGuessedLetters.push(letter);

					this.set('numberOfGuessesRemaining', newIncorrectGuesses);
					this.set('guessedLetters', uniqueGuessedLetters);
				}
			}
		},

		onCorrectGuess: function () {
			if (this.get('numberOfHiddenLetters') === 1) {
				alert('Correct! Game complete');
				this.resetGame();
			} else {
				this.set('numberOfHiddenLetters', this.get('numberOfHiddenLetters')-1);
			}
		}
	});

  return Game;
});