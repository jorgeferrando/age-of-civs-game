define([
    'config',
    'Population/Person'
],
function(config,Person){
    "use strict";

    var CitizenBuilder = {
        createCitizen: function (features) {
            return new Person(features);
        },
        randomFeatures: function() {
            return {
                age: 0,
                building: null
            };
        }
    };

    return CitizenBuilder;
});
