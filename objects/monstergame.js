var monster = {
  x: 0,
  y: 0
};

var player = {
  x: 0,
  y: 0,
  lives: 3
};

var game = {
  monster: monster,
  player: player,
  boardX: 4,
  boardY: 4,
  score: 0
};

//move right: player.x = (player.x + 1) % game.boardX;
//then would have to code each direction, then randomise movement
//add positions 0 to 3 to a compass and
//move through depending on the random number generated using if statements

while(player.lives > 0) {
  player.x = Math.floor(Math.random() * game.boardX);
  player.y = Math.floor(Math.random() * game.boardY);
  monster.x = Math.floor(Math.random() * game.boardX);
  monster.y = Math.floor(Math.random() * game.boardY);

  console.log("Player is at " + player.x + " " + player.y);
  console.log("Monster is at " + monster.x + " " + monster.y);
  game.score++;

  if(player.x === monster.x && player.y === monster.y) {
    player.lives--;
    console.log("You have lost a life");
  }
}
console.log("Your score was " + game.score);


if(player.lives === 0) {
  game.gameOn = false;
  console.log("Game Over");
}
