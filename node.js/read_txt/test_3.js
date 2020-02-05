var fs = require("fs");

fs.readFile("txt.txt","utf8",function(err,data){
    console.log(data);
    fs.writeFile("sometext.txt","hello everyone"+ data, function(){
    
    });
});
// fs.writeFile("sometext.txt","hello everyone"+ data, function(){
    
// });
// console.log(readed);
// var text = "hello everyone!!" + readed;
// var writetxt = fs.writeFile("sometext.txt",text, function(){
    
// });