//var vowels = [a, e, i, o, u];
// var isAVowel = function(characterToCheck) {
//     return characterToCheck === "a" ||
//     characterToCheck === "e" ||
//     characterToCheck === "i" ||
//     characterToCheck === "o" ||
//     characterToCheck === "u";
// };
//
//
// var checkString = "This is our vowel exercise";
// var vowelOutput = "";
// var stringIndex = 0;
//
// //or checkString[index] instead of checkString.charAt(stringIndex);
//
// while(stringIndex < checkString.length) {
//   if(isAVowel(checkString.charAt(stringIndex))) {
//       vowelOutput += checkString.charAt(stringIndex);
//     }
//   stringIndex ++;
//
// }
// console.log(vowelOutput);

// Using an array and a while loop within the function as an alternative:
//
var isAVowel = function (input) {
  var vowels = ["a", "e", "i", "o", "u"];
  var i = 0;
  var result = false;
  while (i < vowels.length){
    if (input === vowels[i]) {
      result = true;
    }
    i++;
  }
  return result;
};

var string = "This is our vowel excercise!";
var vowelOutput = "";
var i = 0;

while (i < string.length) {
  if (isAVowel(string[i])) {
    vowelOutput = vowelOutput + string[i];
  }
  i++;
}
console.log(vowelOutput);



//Ludmila's code
var isAVowel = function (input) {
  var vowels = ["a", "e", "i", "o", "u"];
  var i = 0;
  var isVowel = false;
  while (i < vowels.length){
    if (input === vowels[i]) {
      var isVowel = true;
    }
    i++;
  }
  return isVowel;
};

var string = "This is our vowel excercise!";
var vowelOutput = "";
var i = 0;

while (i < string.length) {
  if (isAVowel(string[i])) {
    vowelOutput = vowelOutput + string[i];
  }
  i++;
}



// checkString.charAt(stringIndex) === "a" ||
//   checkString.charAt(stringIndex) === "e" ||
//   checkString.charAt(stringIndex) === "i" ||
//   checkString.charAt(stringIndex) === "o" ||
//   checkString.charAt(stringIndex) === "u")
