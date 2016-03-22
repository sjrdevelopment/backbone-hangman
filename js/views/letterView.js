define([
  'backbone',
  'underscore',
  'handlebars',
  'textjs!../../html/templates/letter.hbs'
], function(
  Backbone,
  _,
  Handlebars,
  letterTemplate
) {
  var LetterView = Backbone.View.extend({

    //... is a list tag.
    tagName: 'li',

    initialize: function() {
      this.render();
      
      // this.listenTo(this.model.on('change', this.render.bind(this)));
      // this.listenTo(this.model.collection.on('reset', _.bind(function() {
      //     this.remove();
      // }, this)));

      this.model.on('change', this.render.bind(this));
      this.model.collection.on('reset', _.bind(function() {
        this.remove();
      }, this));
    },

    letterTemplate:  Handlebars.compile(letterTemplate),

    // Re-renders the titles of the todo item.
    render: function() {
      this.$el.html(this.letterTemplate(this.model.attributes));

      return this;
    }
  });

  return LetterView;

});

