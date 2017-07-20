var morseCodeConverter = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  // 0: "-----",
  // 1: ".----",
  // 2: "..---",
  // 3: "...--",
  // 4: "....-",
  // 5: ".....",
  // 6: "-....",
  // 7: "--...",
  // 8: "---..",
  // 9: "----.",
};

var stringToConvert = "simon is cool";
var stringIndex = 0;
var outputString = "";
while(stringIndex < stringToConvert.length) {
  if(stringToConvert[stringIndex] === " ") {
    outputString += " ";
  } else {
  outputString += morseCodeConverter[stringToConvert[stringIndex]];
  }
  stringIndex++;
}
console.log(outputString);
  //console.log(stringToConvert[stringIndex]);
