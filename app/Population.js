define(['Population/Person'],function(Person){
    "use strict";

    var _citizens = [];
    var _buildings = [];

    var Population = {
        Person : Person,
        addPerson : function (person) {
            _citizens.push(person);
        },
        addBuilding : function (building) {
            _buildings.push(building);
        }

    };

    return Population;
});
