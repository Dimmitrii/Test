// var counter = require("./test1");
// console.log(counter.arrayCounter([1,1,53215,125,125,21414,124124,124]));
// console.log(13543125)
// var event = require("events");
// var Myemit_v1 = new event.EventEmitter();
// Myemit_v1.on("some event",function(text){
// console.log(text);
// });
// Myemit_v1.emit("some event","пустой текст");
var events = require("events");
var util = require("util");
var Cars = function(model){
    return this.model = model;
}
util.inherits(Cars,events.EventEmitter);
var Reno = new Cars("Reno");
var Pizho = new Cars("Pizho");
var Tesla = new Cars("Tesla");
var cars = [Reno,Pizho,Tesla];
cars.forEach(function(car){
    car.on("speed",function(text){
        console.log(car.model + "speed is" + text);
    });
});
Reno.emit("speed","124");