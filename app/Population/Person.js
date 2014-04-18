define(["config"],function(config){
    "use strict";

    /**
     * Features
     *
     * age
     */

    var Person = function (features) {
        angular.extend(this, features);
        return this;
    };

    Person.prototype.step = function () {
        if (this.age < config.lifeTimes.PERSON) {
            this.age++;
        }
        if (this.age === config.lifeTimes.PERSON) {
            //should emit an event to say its dead
        }
    };

    return Person;
});
