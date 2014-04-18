define([],function(){
    "use strict";
    return {
        types: {
            PERSON : 1,
            WORKER : 2,
            DEAD : 3,
            BURIED : 4
        },
        lifeTimes: {
            PERSON: 10,
            BUILDING: 10
        },
        BUILDING_MAX_PLACES: 4
    }
});
