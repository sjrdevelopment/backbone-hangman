define(['jquery', 'backbone', 'underscore', 'wordCollection', 'letterView'], function($, Backbone, _, Word, LetterView) {
  var GameWord = new Word();

  var OtherView = Backbone.View.extend({

    el: '#word-wrapper',


    events: {
      'keypress #guess': 'lookForLetter',
    },

    initialize: function() {
     // GameWord = new Word();

      GameWord.fetch({
        success: this.render
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

      var letterEntered = $(event.target).val().toUpperCase();

      console.log(letterEntered);

      _.each(GameWord.models, function(model, index) {

          console.log(model.get('character'));

        if(model.get('character') === letterEntered) {
          console.log('letter found');

          model.set('isShown', true);
        }
      });
    }

  });

  return OtherView;
});
