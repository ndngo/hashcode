let writeToFile = function(filename, fileContent) {
    fs = require("fs");
    console.log("writing file");
    fs.writeFile("out.txt", fiileContent, "utf-8", function(err) {
        if (err)
        {
            console.log(err);
        }
    });
}