var card = {
  title: "\"Fix the bug\"",
  description: "Fix it well",
  status: "Open",
  owner: ""
};

//return fase is so that if card is already owned you don't want to update it
var pickUpCard = function(card) {
  if(card.owner !== "") {
    return false;
  }
  card.owner = "Julia Harper";
  card.status = "In progress";
  return true;
}

// console.log(pickUpCard(card));
// console.log(card);

var success = pickUpCard(card);
if (success === true) {
  console.log("I picked up the card called " + card.title);
} else {
  console.log("That card is already allocated");
};
