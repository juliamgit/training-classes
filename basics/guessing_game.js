// //brings in the input library:
var myob = require('myobio-node');
// //this is how to output:
// myob.output('Hello world!');
// //this is how to get input from the user and print it:
// var input = myob.input('Whats your name?');
// console.log(input);
// //how to write an alert:
// myob.alert('DANGER! DANGER!');



var randomNumber = Math.ceil(Math.random() * 10);
myob.output("The secret number is " + randomNumber);


myob.output("Hi there, let's play a game!");
myob.output("I'm choosing a number between 1-10, you can guess it");

var userGuess = parseInt(myob.input("Pick a number"));

while(userGuess !== randomNumber) {
  if(userGuess !== randomNumber) {
    myob.output("Sorry, try again!");
    userGuess = parseInt(myob.input("Pick a number"));

  }
}
console.log("YAY!")
