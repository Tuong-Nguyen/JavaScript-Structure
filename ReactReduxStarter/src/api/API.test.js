/**
 * Created by nkim on 7/31/2017.
 */

import expect from 'expect';
import axios from 'axios';


describe('call API', () => {
  it('get Authors', (done) => {
    axios.get('http://192.168.104.45:4001/authors')
      .then((res) => {
        expect(res.data.length).toEqual(3);
      })
      .then(done, done);
  });

  it('get Courses', (done) => {
    axios.get('http://192.168.104.45:4001/courses')
      .then((res) => {
        expect(res.data.length).toEqual(5);
      })
      .then(done, done);
  });
});
