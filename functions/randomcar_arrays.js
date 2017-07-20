var randomX = function(x) {
  return Math.floor(Math.random() * x);
};

var randomTransmission = function() {
  var transmission = ["auto", "manual"]
  var transmissionIndex = randomX(transmission.length);
  return transmission[transmissionIndex];
};

var randomDoors = function() {
  var doors = [2, 3, 8];
  var doorsIndex = randomX(doors.length);
  return doors[doorsIndex];
};

var randomYear = function() {
  var year = [1999, 2016, 2015];
  var yearIndex = randomX(year.length);
  return year[yearIndex];
};

var randomColor = function() {
  var color = ["blue", "red", "black"];
  return color[randomX(color.length)];
};

var randomCar = function() {
  var localCar = {};
  localCar.color = randomColor();
  localCar.year = randomYear();
  localCar.doors = randomDoors();
  localCar.transmission = randomTransmission();
return localCar;
};

var printCar = function(car) {
  console.log("Transmission: " + car.transmission);
  console.log("Color: " + car.color);
  console.log("Doors: " + car.doors);
  console.log("Year: " + car.year);
  console.log("");
};

var numberOfCars = function(n) {
  var numberOfCars = 0;
  while(numberOfCars < n) {
   printCar(randomCar());
   numberOfCars++;
  }
};

var generateXNumberOfCars = function(numberOfCars) {
  var index = 0;
  var carArray = [];
  while(index < numberOfCars) {
    carArray[index] = randomCar();
    index++;
  }
  return carArray;
};

var myCars = generateXNumberOfCars(50);

var index = 0;
while(index < myCars.length) {
  if(myCars[index].color === "blue") {
  printCar(myCars[index]);
  index++;
}
}
