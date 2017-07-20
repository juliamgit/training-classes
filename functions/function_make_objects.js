var aCar = {
  transmission: "auto",
  color: "blue",
  doors: 4,
  year: 1994
};

var anotherCar = {
  transmission: "manual",
  color: "red",
  doors: 2,
  year: 2009
};

var buildCar = function (t, c, d, y, m) {
  var localCar = {}
  localCar.transmission = t;
  localCar.color = c;
  localCar.doors = d;
  localCar.year = y;
  localCar.make = m;
  return localCar;
}
var vivianCar = buildCar("manual", "black", 2, 2013, "Astin Martin");
var juliaCar = buildCar("auto", "red", 5, 2016, "Porsche");
var oggieCar = buildCar("manual", "red", 3, 2016, "Ferrari");
//
// console.log("transmission is " + juliaCar.transmission);
// console.log("color is " + juliaCar.color);
// console.log("number of doors are: " + juliaCar.doors);
// console.log("the year is " + juliaCar.year);

var printCar = function(anyCar) {
  console.log("transmission is " + anyCar.transmission);
  console.log("color is " + anyCar.color);
  console.log("number of doors are: " + anyCar.doors);
  console.log("the year is " + anyCar.year);
  console.log("the make is " + anyCar.make);
  console.log("--------------------");
};

// printCar(vivianCar);
// printCar(juliaCar);
//printCar(oggieCar);

//display all properties of all cars

var groupOfCars = [juliaCar, vivianCar, oggieCar];
index = 0;

while(index < groupOfCars.length) {
  printCar(groupOfCars[index]);
  index++;

}
