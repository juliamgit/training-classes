var randomIndex = function(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
};

var randomTransmission = function() {
  var transmission = ["auto", "manual"];
  return transmission[randomIndex(transmission.length)];
};

var randomColor = function() {
  var color = ["blue", "red", "black"];
  return color[randomIndex(color.length)];
};

var randomDoors = function() {
  var doors = [4, 5, 8];
  return doors[randomIndex(doors.length)];
};

var randomYear = function() {
  var year = [1999, 2016, 2015];
  return year[randomIndex(year.length)];
};


var randomCar = function() {
    var localCar = {}
    localCar.transmission = randomTransmission();
    localCar.color = randomColor();
    localCar.doors = randomDoors();
    localCar.year = randomYear();
    return localCar;
}

var printCar = function(anyCar) {
  console.log("transmission is " + anyCar.transmission);
  console.log("color is " + anyCar.color);
  console.log("number of doors are: " + anyCar.doors);
  console.log("the year is " + anyCar.year);
  console.log("--------------------");
};

var createXCars = function(numberOfCars) {
  var carArray = [];
  var index = 0;
    while (index < numberOfCars) {
      carArray[index] = randomCar();
      index++;
    }
    return carArray;
};

var myCars = createXCars(5);

index = 0;
while(index < myCars.length) {
  printCar(myCars[index]);
  index++;
}

index = 0;
counter = 0;
while(index < myCars.length) {
  if(myCars[index].color === "blue") {
      counter++;
  }
  index++;
}
console.log(counter);


// printCar(randomCar());
