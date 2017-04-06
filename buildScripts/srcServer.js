/**
 * Created by admin1 on 4/6/2017.
 */
var path = require('path');
var open = require('open');
var express = require('express');

var port = 3000;
var app = express();

// Set up route
app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (error) {
  if(error){
    console.log(error);
  } else {
    open('http://localhost:' + port);
  }
})
