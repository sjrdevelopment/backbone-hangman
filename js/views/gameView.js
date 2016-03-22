define([
  'jquery',
  'backbone',
  'underscore',
  'handlebars',
  'textjs!../../html/templates/game.hbs',
  'letterView'
], function(
  $,
  Backbone,
  _,
  Handlebars,
  gameTemplate,
  LetterView
) {

  var GameView = Backbone.View.extend({

    events: {
      'keypress #guess': 'lookForLetter',
    },

    el:  '.guess-area',

    initialize: function() {
      this.render();

      // this.listenTo(this.model.on('wordReady', this.onWordReady));
      // this.listenTo(this.model.on('change', this.render.bind(this)));

      this.model.on('wordReady', this.onWordReady);
      this.model.on('change', this.render.bind(this));
    },

    onWordReady: function() {
			console.log(this.get('word'), 'HangmanWord collection <<<<<<<<');

			_.each(this.get('word').models, function(characterModel, index) {
				var view = new LetterView({model: characterModel});
				$('#word-list').append( view.render().el );
			});
    },

    gameTemplate:  Handlebars.compile(gameTemplate),

    // Re-renders the titles of the todo item.
    render: function() {
      this.$el.html(this.gameTemplate(this.model.attributes));

      return this;
    },

    lookForLetter:  function(event) {
      if ( event.which !== 13 ) {
        return;
      }

      var $input = $(event.target),
          letterEntered = $input.val().toUpperCase(),
          count = 0;

      $input.val('');

      _.each(this.model.get('word').models, _.bind(function(letterModel, index) {

        if (letterModel.getCharacter() === letterEntered) {
          letterModel.showLetter();

          this.model.trigger('correctGuess');

          count++;
        }
      }, this));

      if (count === 0) {
        this.model.trigger('incorrectGuess', letterEntered);
      }
    }
  });

  return GameView;

});

