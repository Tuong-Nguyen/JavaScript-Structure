/**
 * Created by admin1 on 4/6/2017.
 */
import path from 'path';
import open from 'open';
import express from 'express';

const port = 3000;
let app = express();

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
