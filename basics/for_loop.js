
/*

for (
  var i = 0;  // initialiser, only done at start
  i <= 10;    // check condition to run loop again
  i++         // thing to do at the end of every loop
) {
}

*/

// other program stuff
drawBoard();

var number = 15;

var randomNumbers = [10, 15, 30, 10];

var file = getFile();

var index = 0;

while (true) {
  if (index > 10) break;
  console.log(randomNumbers[index] + 1);
  index++;
}

// use my random numbers
drawMonsterToScreen(number, randomNumbers);
