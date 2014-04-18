define([],function(){
    "use strict";

    function gameController($scope,Game){
        Game.start();
        $scope.handler = Game.handler();
    }

    return ['$scope', 'Game',gameController];
});
