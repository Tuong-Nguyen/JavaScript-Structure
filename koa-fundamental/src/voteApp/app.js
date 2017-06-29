/**
 * Created by nctuong on 6/27/2017.
 */

/**
 * Created by QuanLe on 6/25/2017.
 */
const nconf = require('nconf');
nconf.file({file: `${__dirname}/env.json`});

const app = require('./server');

app.listen(3001);

console.log(`Server start on port 3001`);
