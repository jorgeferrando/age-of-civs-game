define([
    'config',
    'Buildings/Building'
],
function(config,Building){
    "use strict";

    var BuildingBuilder = {
        createBuilding: function (features) {
            return new Building(features);
        },
        randomFeatures: function () {
            return {
                age:0,
                persons:[]
            };
        }
    };

    return BuildingBuilder;
});
