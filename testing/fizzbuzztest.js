var isFizz = function(inputNumber) {
  return inputNumber % 3 === 0;
};

var isBuzz = function(inputNumber) {
  return inputNumber % 5 === 0;
};

var isFizzBuzz = function(inputNumber) {
  return isFizz(inputNumber) && isBuzz(inputNumber);
};

var fbProgram = function(number){
  var resultArray = [];
  var currentNumber = 1;
  while (currentNumber <= number) {
    if (isFizzBuzz(currentNumber)) {
     resultArray.push("FizzBuzz");
   }
   else if (isBuzz(currentNumber)) {
     resultArray.push("Buzz")
   }
   else if (isFizz(currentNumber)) {
     resultArray.push("Fizz");
   }
   else if (currentNumber < 0) {
     resultArray.push("no negative numbers");
   }
   else {
     resultArray.push(currentNumber);
   }
   currentNumber++;
  }
  return resultArray;
};

var output = fbProgram(15);
console.log(output);

// isFizz Unit Test
// should return Fizz at third element of array
var expected = "Fizz";
var resultArray = fbProgram(15);
  if(resultArray[2] === expected) {
    console.log("passed");
  } else {
    console.error("failed");
  };
// should should return Buzz at fifth element of array
var expected = "Buzz";
var resultArray = fbProgram(15);
  if(resultArray[4] === expected) {
    console.log("passed");
  } else {
    console.error("failed");
  };
  // should should return FizzBuzz at fourteenth element of array
  // this code is unfinished
  var expected = "FizzBuzz";
  var resultArray = fbProgram(15);
    if(resultArray[14] === expected) {
      console.log("passed");
    } else {
      console.error("failed");
    };
