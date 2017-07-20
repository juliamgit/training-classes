// var c = a.then(function () {
//     // Notice we're just calling b.then, and don't "return" it.
//     b.then(function () {
//         console.log("B!");
//     };)
// };)
//
// // c is a promise, since "then" always returns a promise.
// c.then(function() {
//     console.log("Done!");
// };)

var cubes = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
];

for(var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    for(var j = 0; j < cube.length; j++) {
        display("cube[" + i + "][" + j + "] = " + cube[j]);
    }
}
