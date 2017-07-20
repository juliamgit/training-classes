var myob = require('myobio-node');

// myob.output();
//
// var fullName = myob.input("What's your first name and surname?");

var carParks = [];
var drivers = ["Oggie", "Jonathan", "Simon", "Andrew", "Vivian"];
var purchasedCars = [];

var randomIndex = function(numberOfDrivers) {
  return Math.floor(Math.random() * numberOfDrivers);
};

var createCar = function(driverName) {
  var buildCar = {
    color: "",
    make: "",
    model: "",
    year: "",
    used: ""
  };

  buildCar.color = myob.input("Hi " + driverName + " what color car would you like?");
  buildCar.make = myob.input("what make of car would you like?");
  buildCar.model = myob.input("what model of car would you like?");
  buildCar.year = myob.input("what year of car would you like?");
  buildCar.used = myob.input("would you like new or used?");

  return buildCar;
};

var isAllocated = function(car, carParks) {
  var index = 0;
  while(index < carParks.length) {
    if(carParks[index] === car) {
      return true;
    }
    index++;
  }
  return false;
};

var index = 0;
while(index < drivers.length) {
  purchasedCars[index] = createCar(drivers[index]);
  index++;
};

var carParkIndex = 0;
var randomCar;

while(carParkIndex < 3) {
  do {
    randomCar = randomIndex(drivers.length);
  } while(isAllocated(randomCar, carParks))
  carParks[carParkIndex] = randomCar;
  carParkIndex++;
};

console.log(carParks);
console.log(drivers[carParks[0]] + purchasedCars[carParks[0]]);
console.log(drivers[carParks[1]]);
console.log(purchasedCars[carParks[1]]);
console.log(drivers[carParks[2]]);
console.log(purchasedCars[carParks[2]]);
