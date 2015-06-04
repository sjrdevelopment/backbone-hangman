//var require = require || {};

require.config({

    baseUrl: 'js',

    paths: {
        "jquery": "../libs/jquery/dist/jquery.min",
        "underscore": "../libs/underscore/underscore-min",
        "backbone": "../libs/backbone/backbone-min",
        "handlebars": "../libs/handlebars/handlebars.min",
        "textjs": "../libs/requirejs/text",
        "appController": "appController",
        "letterModel": "models/letter",
        "wordCollection": "collections/word",
        "wordView": "views/wordView",
        "letterView": "views/letterView",
        "gameView": "views/gameView",
        "gameModel": "models/game"
     },

    deps: [
        'jquery'
    ],

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            'exports': 'backbone'
        }
    },

    hbars: {
        extension: '.hbs'
    }

});
