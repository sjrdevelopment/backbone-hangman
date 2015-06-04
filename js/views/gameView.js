define(['jquery', 'backbone', 'underscore', 'handlebars', 'textjs!../../html/templates/game.hbs'], function($, Backbone, _, Handlebars, gameTemplate) {

  var GameView = Backbone.View.extend({

      // The DOM events specific to an item.
      events: {

      },

      el:  ".guess-area",

      initialize: function() {
        console.log('initialise view');
        this.render();
        this.listenTo(this.model.on('change', this.render.bind(this)));
      },

      "gameTemplate":  Handlebars.compile(gameTemplate),

      // Re-renders the titles of the todo item.
      render: function() {
        this.$el.html(this.gameTemplate(this.model.attributes));

        console.log(this.$el);

        return this;
      }
  });

  return GameView;

});

