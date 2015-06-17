define(['jquery', 'backbone', 'underscore', 'wordCollection', 'letterView', 'gameModel', 'gameView'], function($, Backbone, _, Word, LetterView, Game, GameView) {
  var GameWord = new Word();
  var GameModel = new Game();
  var GameView = new GameView({
    model: GameModel
  });

  var WordView = Backbone.View.extend({

    el: '#word-wrapper',

    events: {
      'keypress #guess': 'lookForLetter',
    },

    initialize: function() {
     // GameWord = new Word();

      GameWord.fetch({
        success: this.render
      });

      console.log(GameModel.defaults);

      this.listenTo(GameModel, 'reset', function() {
        console.log('game is resetting');
      });


    },

    render: function() {
      console.log(GameWord);

      _.each(GameWord.models, function(character, index) {
        console.log(character);

        var view = new LetterView({model: character});

        $("#word-list").append( view.render().el );
      });
    },

    lookForLetter:  function(event) {
      console.log('test');
      if ( event.which !== 13 ) {
        return;
      }

      var $input = $(event.target);
      var letterEntered = $input.val().toUpperCase();
      $input.val('');

      console.log(letterEntered);
      var count = 0;

      _.each(GameWord.models, function(model, index) {

          console.log(model.get('character'));

        if(model.get('character') === letterEntered) {
          console.log('letter found');

          model.set('isShown', true);

          count++;

        }
      });

      if (count === 0) {
        console.log('no match');
        console.log(GameModel);
        GameModel.trigger('failed', letterEntered);
      }
    }

  });

  return WordView;
});
