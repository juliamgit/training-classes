var numbers = [3, 5, 78, 35, 98];
var index = 0;
var maxNumber = 0;
if(numbers.length === 0){
  console.log("there are no numbers")
  }
  else {
    while(index < numbers.length) {
      if(numbers[index] > maxNumber){
      maxNumber = numbers[index];
      }
      index++;
    }
    console.log("The max number is: " + maxNumber)
  }
