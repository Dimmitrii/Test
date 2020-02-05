// module.exports.arrayCounter = function(array){
//     return array.length;
// }
var events = require("events");
var util = require("util");

function Cars(model){
    return this.model = model;
}

util.inherits(Cars,events.EventEmitter);

const BMV = new Cars("bmv");
const audi = new Cars ("audi");
const  tesla = new Cars("tesla");
const cars = [BMV,audi,tesla];

cars.forEach(function(car){
    car.on("suck", function(text){
        console.log(`${car.model} speed is ${text}`);
    });
});
audi.emit("suck",200);
