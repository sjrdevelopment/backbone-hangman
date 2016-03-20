require([
    'gameModel',
    'wordCollection',
    'gameView'
], function (
    GameModel,
    WordCollection,
    GameView
) {

  var HangmanWord = new WordCollection();

  // Models can accept two parameters, attributes and options
  var HangmanGameModel = new GameModel({
    word: HangmanWord
  });

  var HangmanGameView = new GameView({
    model: HangmanGameModel
  });

});