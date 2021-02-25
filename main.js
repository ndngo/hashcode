// node main.js <filename>

fs = require("fs");
//import * as Pizza from './pizza.js';
let st = require("./street");
let p = require("./path");
let inter = require("./intersection.js");
//let dl = require("./deliveryLogic");
let filename;

// get file name from cmd line args
process.argv.forEach(function (val, index, array) {
  if(index == 2)
  {
    filename = val;
  }
});

if (typeof filename != "undefined")
{
  console.log("Opening file: " + filename + " \n");
} else {
  console.log("\nPlease enter file name of input data.\neg. node main.js <filename>");
}

// read the file
fs.readFile(filename, "utf-8", function(err, data) {

  if(err) {
      return console.log(err);
  }

  let lines = data.split("\n");
  let header = lines[0].split(" ");

  let metadata = {
    duration: header[0],
    numOfIntersections: header[1],
    numOfStreets: header[2],
    numOfCars: header[3],
    bonus: header[4]
  }

 // console.log(metadata);

  // loop through streets
  let streets = [];
  for(let i = 1; i < Number(metadata.numOfStreets) + 1; i++) {
    let str = lines[i].split(" ");
    streets.push(new st.Street(str[0], str[1], str[2], str[3]));
  }
  let paths = [];
  for(let j = Number(metadata.numOfStreets) + 1; j < Number(metadata.numOfCars) + Number(metadata.numOfStreets) + 1; j++) {
    let pa = lines[j].split(" ");
    paths.push(new p.Path(pa[0], pa[1]));
  }
      // get intersections from streets
  // loop through streets

  let intersections = [];

  // max index of intersections, so # of intersections is max + 1, since index start at 0
  let max = -1;
  for(let k = 0; k < streets.length; k++) {
    // intersections are ID'd by number
    // if intersection not in array, add it and add the streets connected to it
    // else only add the streets connected to it

    intersections.push(new inter.Intersection(streets[k].startIntersection, streets[k].name, ""));
    intersections.push(new inter.Intersection(streets[k].endIntersection, "", streets[k].name));

    max = Math.max(max, streets[k].startIntersection);
    max = Math.max(max, streets[k].endIntersection);
  }

  
  console.log(max);

    // sort by intersection ID, compress
    // loop through
  intersections.sort(function(a, b) {
    return a.id - b.id;
  });

  // add together all intersections wit same id


});