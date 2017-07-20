var a = 3;

if(a === 1 || a === 2 || a === 4){
  console.log(a);

} else if(a === 3){
  console.log("fizz");

} else if(a === 5){
  console.log("buzz");
}

if (a < 0){
  console.log("I'm sorry, we cannot accept negatives");
}


var n = 5;

if(n%3 === 0){
  console.log("fizz")

} else if(n%5 ===0){
  console.log("buzz");

} else if(n%5 === 0 && n%3 === 0){
  console.log("fizzbuzz")
}

var a = 101;
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
