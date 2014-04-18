define([
    "Population/CitizenBuilder",
    "Buildings/BuildingBuilder"
],function(CitizenBuilder,BuildingBuilder){
    "use strict";
    function GameFactory ($timeout) {

        var population = [];
        var buildings = [];

        function start() {
            population.forEach(function(person){
                person.step();
            });
            buildings.forEach(function(building){
                building.step();
            });
            $timeout(start,1000);
        }


        function handler() {

            function getFirstAvailableBuilding(buildings) {
                var l = buildings.length;
                for(var i=0;i<l;i++) {
                    if (buildings[i].hasFreePlaces()){
                        return buildings[i];
                    }
                }
                return false;
            }

            return {
                createPerson: function () {
                    population.push(CitizenBuilder.createPerson(CitizenBuilder.randomFeatures()));
                },
                createBuilding: function() {
                    buildings.push(BuidingBuilder.createBuilding(BuildingBuilder.randomFeatures()));
                },
                assignPersonToRandomBuilding: function(person) {
                    var building = getFirstAvailableBuilding(buildings);
                    if (building === false) {
                        console.error("There are no buildings free");
                        return false;
                    }
                    person.building = building;
                    building.persons.push(person);
                    return true;
                }
            }
        }

        return {
            start: start,
            handler: handler
        };

    }

    return ['$timeout',GameFactory];
});
