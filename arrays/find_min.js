var groupOfNumbers = [4, 67, 8, 1, 13, 47];
var index = 0;
var smallestSoFar = groupOfNumbers[0];

while (index < groupOfNumbers.length) {

  if(groupOfNumbers[index] < smallestSoFar) {
    smallestSoFar  = groupOfNumbers[index];
  }
  index++;
}
console.log("The smallest number is " + smallestSoFar)
