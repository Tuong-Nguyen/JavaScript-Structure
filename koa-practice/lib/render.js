/**
 * Created by lnthao on 7/18/2017.
 */
const views = require('koa-views');

module.exports = views(__dirname + './../views', {
    map: {
        html: 'pug'
    }
});