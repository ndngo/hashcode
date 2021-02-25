let st = require("./street");
let cars = require("./cars");
let inter = require("./intersection.js");

function mainLogic(cars, streets, simulationTime, intersections) {
    //This will calculate the minimum possible time to complete this car's journey
    for (int i = 0; i < cars.length(); i++) {
        minimumTimeToComplete = 0
        intersectionsArrivedAt = []
        for (int j = 0; j < cars.streets.length(); j++) {
            minimumTimeToComplete += cars[i].streets[j].length;
            intersectionsArrivedAt.push(cars[i].streets[j].endIntersection)
        }
        print(minimumTimeToComplete);
        //This will check if the minimum possible time for a car to complete its journey exceeds our simulation time then we do not optimize for it
        if (minimumTimeToComplete > simulationTime) {
            // we do not optimize for it
        }
    }

    //for (int i = 0; i < intersections.length(); i++) {

    //}

    // 




}    