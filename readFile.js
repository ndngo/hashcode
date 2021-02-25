fs = require("fs");

function readFile(filename) {

  
  if (typeof filename != "undefined")
  {
    console.log("Opening file: " + filename + " \n");
  } else {
    console.log("\nPlease enter file name of input data.\neg. node main.js <filename>");
  }
  
  let text = "";
  // read the file

  text = fs.promises.readFile(filename, "utf-8", {encoding: type});
  // function(err, data) {
  
 //   if(err) {
  //      return console.log(err);
  //  }
    // parse data
  
    // data processing
    //let delivery = dl.deliveryLogic(numOfPizzas, teams, pizzas);
 // });
  console.log(text)
}

module.exports.readFile = readFile;