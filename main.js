// node main.js <filename>

fs = require("fs");
//import * as Pizza from './pizza.js';
//let Pizza = require("./pizza");
//let dl = require("./deliveryLogic");
let filename;

console.log(module.exports);

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

  // parse data

  // data processing
  let delivery = dl.deliveryLogic(numOfPizzas, teams, pizzas);


  // write out file

  let outfile = "";

  //outfile = outfile.replace(/,/g, ' ');

  fs.writeFile("out.txt", outfile, "utf-8", function(err) {
    if (err)
    {
      console.log(err);
    }

  });

});

