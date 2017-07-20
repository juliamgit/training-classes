var runners = ["Juls", "Andrew", "Jono", "Oggie"];
var last = runners[runners.length - 1];



if(runners.length === 0) {
  console.log("no one ran the race");
}
else {
  if (runners.length >= 1)
    console.log(runners[0] + " was in first position");
  else
    console.log("no first");

  if(runners.length >= 2)
    console.log(runners[1] + " was in second position");
  else
    console.log("no second");

  if(runners.length >= 3)
    console.log(runners[2] + " was in third position");
  else
    console.log("no third");
}
console.log(last + " was in last position.");

// first
// second
// last
