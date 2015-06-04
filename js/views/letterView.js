define(['jquery', 'backbone', 'underscore', 'handlebars', 'textjs!../../html/templates/letter.hbs'], function($, Backbone, _, Handlebars, letterTemplate) {
  var LetterView = Backbone.View.extend({

      //... is a list tag.
      tagName: 'li',

      // The DOM events specific to an item.
      events: {

      },

      initialize: function() {
        console.log('initialise view');
        this.render();
        this.listenTo(this.model.on('change', this.render.bind(this)));
      },

      "letterTemplate":  Handlebars.compile(letterTemplate),

      // Re-renders the titles of the todo item.
      render: function() {
        this.$el.html(this.letterTemplate(this.model.attributes));

        return this;
      }
  });

  return LetterView;

});

