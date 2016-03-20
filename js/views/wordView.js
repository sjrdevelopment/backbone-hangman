define([
  'jquery',
  'underscore',
  'backbone',
  'gameModel',
  'gameView',
  'wordCollection',
  'letterView'
], function(
  $,
  _,
  Backbone,
  GameModel,
  GameView,
  WordCollection,
  LetterView
  
) {

  // this needs renaming / moving into a controller or game view / game model


  
  var HangmanGameModel = new GameModel();
  var HangmanWord = new WordCollection();

  var HangmanGameView = new GameView({
    model: HangmanGameModel
  });

  var HangmanWordView = Backbone.View.extend({

    el: '#word-wrapper',

    events: {
      'keypress #guess': 'lookForLetter',
    },

    initialize: function() {
      // 1. fetch a new word
      HangmanWord.fetch({
        success: this.render
      });

      this.listenTo(HangmanGameModel, 'reset', function() {
        console.log('game is resetting');
      });


    },

    render: function() {
      //console.log(HangmanGameWord.length, 'gameword <<<<');
      console.log(HangmanWord, 'HangmanWord collection <<<<<<<<');
      _.each(HangmanWord.models, function(characterModel, index) {

        if (characterModel.get('character') === " ") {
          characterModel.set('character', '/');
        }

        var view = new LetterView({model: characterModel});

        $("#word-list").append( view.render().el );
      });
    },

    lookForLetter:  function(event) {
      if ( event.which !== 13 ) {
        return;
      }

      var $input = $(event.target);
      var letterEntered = $input.val().toUpperCase();
      $input.val('');

      var count = 0;

      _.each(HangmanWord.models, function(letterModel, index) {


        if(letterModel.getCharacter() === letterEntered) {
          console.log('letter found');

          letterModel.showLetter();

          count++;

        }
      });

      if (count === 0) {
        console.log('no match');
        debugger;
        HangmanGameModel.trigger('failed', letterEntered);
      }
    }

  });

  return HangmanWordView;
});
