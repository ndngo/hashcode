// node pizza.js <filename>
fs = require("fs");

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
  console.log("\nPlease enter file name of input data.\neg. node pizza.js <filename>");
}

// read the file
fs.readFile(filename, "utf-8", function(err, data) {

  if(err) {
      return console.log(err);
  }

  console.log(data);

  // parse data

  let lines = data.split("\n");
  console.log(lines[0]);
  let headerInfo = lines[0].split(" ");
  let numOfPizzas = headerInfo[0];

  let teams = [];
  // teams[sizeOfTeams] = <numOfTeams>;

  for(var i = 1; i < headerInfo.length; i++)
  {
    if (headerInfo[i].trim() != "")
    {
      teams[i + 1] = headerInfo[i];
    }
  }

  
  console.log(teams);
});

