// prompt user for full name
// say hello first name
var myob = require('myobio-node');

var fullName = myob.input("What's your first name and surname?");
var firstName = fullName.substring(0, fullName.indexOf(" "));

myob.output("Hello " + firstName);


// var fullName = myob.input("What's your first name and surname?");
// var surName = fullName.substring(fullName.indexOf(" "), fullName.length);
//
// myob.output("Hello" + surName);


// var fullName = myob.input("What's your full name?");
// var surName = fullName.substring(fullName.lastIndexOf(" "), fullName.length);
//
// myob.output("Hello" + surName);
