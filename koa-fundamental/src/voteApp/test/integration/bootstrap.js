/**
 * Created by nctuong on 6/28/2017.
 */
const superTest = require('supertest');

const nconf = require('nconf');
nconf.file({file: `${__dirname}/env.json`});

const app = require('../../server').listen();

beforeEach(function(){
   this.request = superTest(app);
});

