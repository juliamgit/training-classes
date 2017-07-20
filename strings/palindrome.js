var word = "Hannah";
var firstLetterNumber = 0;
var lastLetterNumber = word.length;
var middlePosition = Math.floor(word.length/2);
var isPalindrome = true;
if (word.length%2 === 0)  {
  while (firstLetterNumber < middlePosition && isPalindrome === true) {
    if (word.charAt(firstLetterNumber) === word.charAt(lastLetterNumber)) {
      firstLetterNumber++;
      lastLetterNumber--;
    }
    else {
      isPalindrome = false;
 //      console.log("Not A palindrome");
    }
  }
  console.log("Palindrome?" + " " + isPalindrome);
}
// else {
//
//   // console.log("No");
// }
// This code currently only produces false. Unfinished
