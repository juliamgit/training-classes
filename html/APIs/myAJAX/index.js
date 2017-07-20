var express = require('express');
var request = require('request');
var app = express();
app.use(express.static('public'));

app.get('/population', function (req, res) {
  request('http://www.abs.gov.au/api/demography/populationprojection', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var bodyObject = JSON.parse(body);
        console.log(bodyObject);
        res.send(bodyObject);
    } else {
      res.send(response.statusCode);
    }
  });
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
