define([
    "angular"
], function (angular) {
    "use strict";
    var app = angular.module("app", []);

    app.controller("mainCtrl",function($scope) {
       $scope.Message="App is running!";
    });

    return app;
});
