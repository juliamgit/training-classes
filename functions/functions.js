// var myFunction = function(name) {
//     console.log("hello");
//     console.log(name);
// };
// myFunction("Jules")
//
// var getFirstName = function(name) {
//
// }

var blackBox = function(x, y) {
  return x + y;
}

var result = blackBox(5, 3);
console.log(result);
console.log(blackBox(5, 3));


// var monster = {
//   x: 0,
//   y: 0
// };
//
// var player = {
//   x: 0,
//   y: 0,
//   lives: 3
// };
//
// var game = {
//   monster: monster,
//   player: player,
//   boardX: 100,
//   boardY: 100,
//   score: 0
// };
//
// var randomX = function(upperLimit) {
//   return Math.floor(Math.random() * upperLimit);
//
// }
//
// while(player.lives > 0) {
//   player.x = randomX(game.boardX);
//   player.y = Math.floor(Math.random() * game.boardY);
//   monster.x = randomX(game.boardX);
//   monster.y = Math.floor(Math.random() * game.boardY);
//
//   console.log("Player is at " + player.x + " " + player.y);
//   console.log("Monster is at " + monster.x + " " + monster.y);
//   game.score++;
//
//   if(player.x === monster.x && player.y === monster.y) {
//     player.lives--;
//     console.log("You have lost a life");
//   }
// }
// console.log("Your score was " + game.score);
//
//
// if(player.lives === 0) {
//   game.gameOn = false;
//   console.log("Game Over");
// }
