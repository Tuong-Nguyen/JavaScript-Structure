/**
 * Created by QuanLe on 6/25/2017.
 */
require('dotenv').config();

const app = require('./server');

app.listen(3000);

console.log(`Server start on port 3000`);
