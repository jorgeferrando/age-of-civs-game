define([
    "angular",
    "GameController",
    "Game"
], function (angular, GameCtrl, GameFactory) {
    "use strict";
    var app = angular.module("app", []);

    app
        .factory("Game",GameFactory)
        .controller("gameCtrl",GameCtrl);

    return app;
});
