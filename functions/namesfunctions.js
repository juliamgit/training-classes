var isStringLengthEven = function(checkString) {
  return checkString.length % 2 === 0;
};

var names = ["Andrew", "Hannah", "Jules", "Ludmila", "Oggie"];
var index = 0

while(index < names.length) {
  if(isStringLengthEven(names[index])) {
  console.log(names[index])
  }
  index++;
}
