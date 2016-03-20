define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {

	var Letter = Backbone.Model.extend({
		defaults: {
			character: '',
			isShown: false
		},

		parse: function(data) {
			// when model is initializes with data
			var letterData = {
				character: data.toUpperCase()
			}

			return letterData;
		},

		showLetter: function() {
			// when called, set this letter's isShown attribute to true
			this.set('isShown', true);
		},

		getCharacter: function() {
			return this.get('character');
		}
	});

    return Letter;
});