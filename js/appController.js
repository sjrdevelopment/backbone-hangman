require([
	'jquery',
	'underscore',
	'backbone'
], function(
	$,
	_,
	Backbone
) {
	'use strict';

	var appCtrl = {
		"initialize":  function() {
			Backbone.history.start();
		}
	}

	return {
		"initialize":  appCtrl.initialize;
	}
});