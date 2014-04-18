define(["config"],function(config){
    "use strict";

    /**
     * Features
     *
     * age
     * persons
     */
    var Building = function (features) {
        angular.extend(this, features);
        return this;
    };

    Building.prototype.step = function () {
        if (this.age < config.lifeTimes.BUILDING) {
            this.age++;
        }
        if (this.age === config.lifeTimes.BUILDING) {
            //should emit an event to say its dead
        }
    };

    Building.prototype.hasFreePlaces = function() {
        return this.persons.length < config.BUILDING_MAX_PLACES;
    };

    return Person;
});
