/**
 * Created by nctuong on 6/27/2017.
 */

/**
 * Created by QuanLe on 6/25/2017.
 */
const nconf = require('nconf');

nconf.overrides({
  Database: {
    host: "192.168.104.45",
    db: "voteApp",
    port: 27017
  }
});
nconf.argv({
  dbport: {
    alias: 'Database:port',
    describe: 'Database port'
  },
  dbhost: {
    alias: 'Database:host',
    describe: 'Database host'
  },
  dbname: {
    alias: 'Database:db',
    describe: 'Database name'
  }
});
nconf.env("__");
nconf.file({file: `${__dirname}/config.json`});
nconf.defaults({
  Database: {
    host: "192.168.104.45",
    db: "voteApp",
    port: 27017
  }
});

const app = require('./server');

app.listen(3001);

console.log(`Server start on port 3001`);
