require([
    'jquery',
    'underscore',
    'backbone',
    'gameModel',
    'wordCollection',
    'gameView'
], function (
    $,
    _,
    Backbone,
    GameModel,
    WordCollection,
    GameView
) {

  var HangmanWord = new WordCollection();
  var HangmanGameModel = new GameModel({
    word: HangmanWord
  });

  var HangmanGameView = new GameView({
    model: HangmanGameModel
  });

});