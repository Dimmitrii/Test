// var fs = require("fs");
// var http = require("http");
// var server = http.createServer(function(req,res){
//     if(req.url === "/" || req.url === "/home"){
//     res.writeHead(200,"{Content-Type:text/html}");
//     fs.createReadStream(__dirname + "/justhtml.html" ,"utf8" ).pipe(res);
//     }
//     else if(req.url === "/kufar"){
//     res.writeHead(200,"{Content-Type:text/html}");
//     fs.createReadStream(__dirname + "/justhtml2.html" ,"utf8" ).pipe(res);
//     }
//     else{
//     res.writeHead(404,"{Content-Type:text/html}");
//     fs.createReadStream(__dirname + "/jstht.html" ,"utf8" ).pipe(res);
//     }
// });
// server.listen(3000,"127.0.0.1");
// console.log("всё хорошо");
var cors = require('cors')
const obj = {
    name : "Vasia",
    age : "22",
    motherName: "Tania",
    hasCar: false
}
var express = require("express");
var app = express();
app.use(cors())
app.get("/home",function(req,res){
res.sendFile(__dirname + "/justhtml.html");
});
app.get("/kufar",function(req,res){
res.sendFile(__dirname + "/justhtml2.html");
});
app.get(function(req,res){
res.sendFile(__dirname + "/jstht.html");
}); 
app.get("/data",function(req,res){
    res.json(obj);
});  
app.post("/datab",function(req,res){
    // res.json(req);
    console.log(req.body);
    var data = req.body;
    app.get("/datab", function(req,res){
        res.send(data);
    });
});  
app.listen(3000);