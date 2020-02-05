var fs = require("fs");
var readStream = fs.createReadStream(__dirname + "/text.txt");
var writeStream = fs.createWriteStream(__dirname +"/sometext.txt");
readStream.on("data",function(chunk){
    console.log("New CHUNK");
    writeStream.write(chunk);
});
