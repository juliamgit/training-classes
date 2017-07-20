var randomPosition = function(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

var isPlayerEaten = function(p, m) {
  return p.x === m.x && p.y === m.y;
}

var move = function(movePM, boardWidth, boardLength) {
  movePM.x = randomPosition(boardWidth);
  movePM.y = randomPosition(boardLength);
};

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

while(player.lives > 0) {
  move(player, game.boardX, game.boardY);
  move(monster, game.boardX, game.boardY);

  console.log("Player is at " + player.x + " " + player.y);
  console.log("Monster is at " + monster.x + " " + monster.y);
  game.score++;

  if(isPlayerEaten(player, monster)) {
    player.lives--;
    console.log("You have lost a life");
  }
}
console.log("Your score was " + game.score);


if(player.lives === 0) {
  game.gameOn = false;
  console.log("Game Over");
}
