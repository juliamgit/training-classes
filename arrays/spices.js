
var spices = ["chilli", "salt", "pepper", "nutmeg"];
var index = 0;

while (true) {
  if (index >= spices.length) break;
  console.log(spices[index] + " yum");
  index++;
}


var testResults = [80, 99, 100, 85];
var index = 0;

while (true) {
  if (index >= testResults.length) break;
  console.log("Your test result is: " + testResults[index]);
  index++;
}


var testResults = [80, 99, 100, 85];
var index = 0;
var sum = 0;

while (true) {
  if (index >= testResults.length) break;
  sum = sum + testResults[index];
  index = index + 1;
  index++;
}
console.log("Your average test result is: " + (sum / testResults.length));


var randomNumbers = [17, 22, 34, 67, 89];
var index = 0;

while (true) {
  if (index >= randomNumbers.length) {
    break;
  }
  console.log(randomNumbers[index] + 10);
  index++;
}
