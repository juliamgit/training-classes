var express = require('express');
var app = express();
app.use(express.static('public'));

var childGame = function(children, skips){
  var numberOfChildren = children;
  var childrenPlaying = [];
  for(var index=1; index<=numberOfChildren; index++) {
     childrenPlaying.push(index);
  }

  var eliminationCounter = skips;
  var childrenIndex = -1;
  var orderEliminated = [];
  var winner = childrenPlaying[0];

  while(childrenPlaying.length > 1) {
    //step 1: skip number of children equal to elimination counter
    childrenIndex += eliminationCounter;
      if(childrenIndex >= childrenPlaying.length) {
        childrenIndex = childrenIndex % childrenPlaying.length;
      }
    //step 2: push eliminated child onto the end of new array
    orderEliminated.push(childrenPlaying[childrenIndex]);
    //step 3: remove that child from the array
    childrenPlaying.splice(childrenIndex, 1);
    childrenIndex--;
    //step 4: run the loop until one child is left
      console.log(orderEliminated);
  };
  //step 5: print the winner and print the elimination array
  console.log(orderEliminated);
  console.log("The winner is " + childrenPlaying[0]);

return result = {winner: childrenPlaying[0], eliminationOrder: orderEliminated};
};

childGame(10, 2);

app.get('/childgame', function (request, response) {
  console.log(request.query);
    var children = parseInt(request.query.children);
    var skips = parseInt(request.query.skips);
    response.send(childGame(children, skips));
    });

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
