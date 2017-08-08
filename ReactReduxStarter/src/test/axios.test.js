/**
 * Created by nkim on 8/8/2017.
 */
import axios from 'axios';
import nock from 'nock';
// import {expect} from 'jest';

describe("Axios", () => {

  nock('http://example.com')
    .get('/users')
    .reply(200, "abc")
    .get('/users/100')
    .replyWithError("User is not exist.");

  test("get method success", () => {

    return axios.get('http://example.com/users')
      .then(res => {
        console.log(res);
        expect(res).toMatch(/abc/);
      });

  });

  test("get method failure", () => {
    return axios.get('http://example.com/users/100')
      .catch(error => {
        console.log(error);
        expect(error).toBe('aaa');
      });

  });
});
