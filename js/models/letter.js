define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {

	var Letter = Backbone.Model.extend({
		defaults: {
			character: '',
			isShown: false
		},

		parse: function(data) {
			var letterData = {};
			letterData.character = data.toUpperCase();
			return letterData;
		}

	});

    return Letter;
});