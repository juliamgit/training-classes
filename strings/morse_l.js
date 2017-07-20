var expression = "Simon is cool".toLowerCase();
var i = 0;
var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "/"];
var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
var output ="";


while (i < expression.length) {
    output = output + morseCode[alphabet.indexOf(expression[i])];
    i++;
}
console.log(output);
