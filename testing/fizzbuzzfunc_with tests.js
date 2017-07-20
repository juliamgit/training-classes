var isFizz = function(inputNumber) {
  return inputNumber % 3 === 0;
};

var isBuzz = function(inputNumber) {
  return inputNumber % 5 === 0;
};

var isFizzBuzz = function(inputNumber) {
  return isFizz(inputNumber) && isBuzz(inputNumber);
};

var fbProgram = function(){
  var currentNumber = 1;
  while (currentNumber <= 100) {
    if (isFizzBuzz(currentNumber)) {
     console. log("FizzBuzz");
   }
   else if (isBuzz(currentNumber)) {
     console.log("Buzz")
   }
   else if (isFizz(currentNumber)) {
   console.log("Fizz");
   }
   else if (currentNumber < 0) {
     console.log("no negative numbers");
   }
   else {
     console.log(currentNumber);
   }
   currentNumber++;
  }
};

fbProgram();

// isFizz Unit Test
// should return true if divisible by 3
var expected = true;
var result = isFizz(9);
  if(result === expected) {
    console.log("passed");
  } else {
    console.error("failed");
  };
// should return true if negative and divisible by 3
var expected = true;
var result = isFizz(-9);
  if(result === expected) {
    console.log("passed");
  } else {
    console.error("failed");
  };
  // should return true if 0 is the parameter
  var expected = true;
  var result = isFizz(0);
    if(result === expected) {
      console.log("passed");
    } else {
      console.error("failed");
    };
// should return false if indivisible by 3
  var expected = false;
  var result = isFizz(8);
    if(result === expected) {
      console.log("passed");
    } else {
    console.error("failed");
    };
// should return false if parameter not an integer
  var expected = false;
  var result = isFizz("Julia");
    if(result === expected) {
      console.log("passed");
    } else {
      console.error("failed");
    };

//TDD
var isEven = function(number){
  return number % 2 === 0;
}

//if even number should return true
var expected = true;
var result = isEven(10);
  if(result === expected) {
    console.log("passed");
  } else {
    console.error("failed");
  };
//if odd number should return false

  var expected = false;
  var result = isEven(11);
    if(result === expected) {
      console.log("passed");
    } else {
      console.error("failed");
    };
