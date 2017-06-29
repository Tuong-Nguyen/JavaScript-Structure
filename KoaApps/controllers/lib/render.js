/**
 * Created by nttao on 6/28/2017.
 */
const views = require('co-views');

module.exports = views(__dirname + './../../views/',{
   map:{html: 'swig'}
});