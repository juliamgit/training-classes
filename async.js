/**
 * Created by julia.harper on 11/17/16.
 */
// function returnText(callback) {
//     var answer = "cats are cool";
//     callback(answer);
//
// }

const returnText = new Promise(resolve => {
    var answer = "cats are cool";
    resolve(answer);
    }

)

function logText(returnText) {
    console.log(returnText);
}

// returnText(logText);

// returnText(function (text) {
//     console.log(text);
// });

//returnText(text => console.log(text));

// logText = text => console.log(text);
//
// logText = function(text) {
//     console.log(text);
// };
//
// returnText(logText);

returnText
    .then(logText);

// returnText
//     .then(text => console.log(text));