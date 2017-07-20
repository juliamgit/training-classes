//do while loop will run the do code block first and run the loop once
//then check for the condition of the while loop and run it again if it's true

//to break out of an infitnite loop, you can use the code:

// var numbers = [1, 3, 3, 4, 2, 1, 3, 1, 3];
// var index = 0;
// var sum = 0;
// var current = 0;
//
// while(true) {
//   current = numbers[index];
//   sum = sum + current;
//   index = index + 1;
//     if(index > 8) {
//       break;
//     }
// }
//   console.log(sum);

  var a = 1;

while(a <= 100) {
  var fizz = (a%3 === 0);
  var buzz = (a%5 === 0);
  if (fizz && buzz) {
    console.log("fizzbuzz");

  } else if (fizz){
    console.log("fizz");

  } else if (buzz){
  console.log("buzz");
  } else {
    console.log(a);
  }
 a++;
 }
