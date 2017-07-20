// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
//
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
//to run the above, open chrome and type http://localhost:3000

var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send(
    "<html><head><title>My First API</title></head><p style=color:blue>Hello World</p></html>");
});

app.get('/users/:username/:DOB', function (request, response) {
  response.send(
    "Hello your name is " + request.params.username + " Your DOB is " + request.params.DOB);
});

app.get('/getbody', function (request, response) {
  response.send(request.query);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// https://yourfirstnodeapi.herokuapp.com/fizzbuzz/3
