const mongo = require('koa-mongo');

module.exports.db = mongo({
    host: '192.168.104.45',//'192.168.104.45', localhost
    port: 27017,
    db: 'mydb',
    max: 100,
    min: 1
});