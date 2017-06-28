/**
 * Created by nctuong on 6/28/2017.
 */
const superTest = require('supertest');

require('dotenv').config({path: `${__dirname}/.env`});
const app = require('../../server').listen();

beforeEach(function(){
   this.request = superTest(app);
});

