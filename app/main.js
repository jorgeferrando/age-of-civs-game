require.config({
    baseUrl: "/age-of-civs-game/app",
    paths: {
        "angular": "../bower_components/angular/angular",
        "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap",
        "jquery": "../bower_components/jquery/dist/jquery.min",
        "ui.router": "../bower_components/angular-ui-router/angular-ui-router"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "jquery": {
            exports: "$"
        },
        "bootstrap3": {
            deps: ["jquery"]
        },
        "ui.router": {
            deps: ["angular"]
        }
    }
});

define(["angular", "jquery", "app"], function (angular, $, app) {
    "use strict";
    $(document).ready(function () {
        angular.bootstrap(document, ["app"]);
    });
});
