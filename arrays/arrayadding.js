// For a given array,
// add every second value in the array
// then divide the final sum by the total number of numbers added
// when there is only 1 item in the array, output that value

var array = [3];
var index = 1;
var currentTotal = 0;
var numberOfAdditions = 0;

if(index >= array.length) {
  console.log(array[0]);
} else {
    while(array.length > index) {
    currentTotal = currentTotal + array[index];
    numberOfAdditions++;
    index +=2;
  }
  console.log(currentTotal/numberOfAdditions);
}


//, 2, 8, 99, 66, 0, 100, 0, 0
