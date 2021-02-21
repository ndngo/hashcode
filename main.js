// node pizza.js <filename>

fs = require("fs");
//import * as Pizza from './pizza.js';
let Pizza = require("./pizza");
let dl = require("./deliveryLogic");
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
  console.log("\nPlease enter file name of input data.\neg. node pizza.js <filename>");
}

// read the file
fs.readFile(filename, "utf-8", function(err, data) {

  if(err) {
      return console.log(err);
  }

  // parse data

  let lines = data.split("\n");
  let headerInfo = lines[0].split(" ");
  let numOfPizzas = headerInfo[0];

  let teams = [];

  // teams = [sizeOfTeam, numberofteams]
  let size = 2;
  let teamSize = [];

  for(var i = 1; i < headerInfo.length; i++)
  {
    if (headerInfo[i].trim() != "")
    {
      var team = {sizeOfTeam: size, numOfTeams: headerInfo[i]};
      teamSize.push(size);
      size++;
      teams.push(team);
    }
  }
  // parse line items, make list of pizzas

  let pizzas = [];

  for (var i = 1; i < lines.length; i++)
  {

    if (lines[i].split(" ")[0] != "")
    {

      let p = lines[i].split(" ");
      var pizza = new Pizza.Pizza(p[0], p.slice(1, p.length));
      pizzas.push(pizza);

    }
  }
 // console.log(pizzas);

  // delivery
  let delivery = dl.deliveryLogic(numOfPizzas, teams, pizzas);
 // console.out(delivery);

  // write out file

 // console.log(delivery.pizzasDelivered);
  let outfile = "";
  outfile += delivery.pizzasDelivered + '\n';
  //console.log(outfile);
  for (var key in delivery.pizzaInformation) {
    let keyLine = key + ' ';
    for (let index = 0; index < delivery.pizzaInformation[key].length; index++) {
      keyLine += delivery.pizzaInformation[key][index];
    }
    outfile += keyLine + '\n';
  }

  outfile = outfile.replace(/,/g, ' ');

  fs.writeFile("out.txt", outfile, "utf-8", function(err) {
    if (err)
    {
      console.log(err);
      console.log("hello world > out.txt");
    }

  });

});

