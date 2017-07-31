/**
 * Created by nkim on 7/31/2017.
 */

import expect from 'expect';
import axios from 'axios';


describe('call API', () => {
  xit('get Authors', (done) => {
    axios.get('http://192.168.104.45:4001/authors')
      .then((res) => {
        expect(res.data.length).toEqual(3);
      })
      .then(done, done);
  });

  xit('get Author by id', (done) => {
    const id = "scott-allen";
    axios.get('http://192.168.104.45:4001/authors/' + id)
      .then((res) => {
        expect(res.data.id).toEqual(id);
      })
      .then(done, done);
  });

  xit('get Author by id is not existed', (done) => {
    const id = "not existed";
    axios.get('http://192.168.104.45:4001/authors/' + id)
      .catch((error) => {
        expect(error.response.status).toEqual(404);
      })
      .then(done, done);
  });

  xit('post Author is not existed', (done) => {
    const author = {
      firstName: "Cory",
      lastName: "House"
    };

    axios.post('http://192.168.104.45:4001/authors', author)
      .then((res) => {
        expect(res.status).toEqual(201);
      })
      .then(done, done);
  });

  xit('post existing Author', (done) => {
    const author = {
      id: "cory-house",
      firstName: "Cory",
      lastName: "House"
    };

    axios.post('http://192.168.104.45:4001/authors', author)
      .catch((error) => {
        expect(error.response.status).toEqual(500);
      })
      .then(done, done);
  });

  it('update Author', (done) => {
    const id = "scott-allen";
    const author = {
      id: "scott-allen",
      firstName: "Scott",
      lastName: "Allen"
    };
    axios.put('http://192.168.104.45:4001/authors/' + id, author)
      .then((res) => {
        expect(res.status).toEqual(200);
      })
      .then(done, done);
  });

  xit('update Author is not existed', (done) => {
    const id = "not existed";
    const author = {
      firstName: "UpdateScott",
      lastName: "UpdateAllen"
    };
    axios.put('http://192.168.104.45:4001/authors/' + id, author)
      .catch((error) => {
        expect(error.response.status).toEqual(404);
      })
      .then(done, done);
  });

  xit('delete Author by id', (done) => {
      const id = "cory-house";
      axios.delete('http://192.168.104.45:4001/authors/' + id)
        .then((res) => {
          expect(res.status).toEqual(200);
        })
        .then(done, done);

  });

  xit('delete Author by id is not existed', (done) => {
    const id = "BJEFCU2UZ";
    axios.delete('http://192.168.104.45:4001/authors/' + id)
      .catch((error) => {
        expect(error.response.status).toEqual(404);
      })
      .then(done, done);
  });


  xit('get Courses', (done) => {
    axios.get('http://192.168.104.45:4001/courses')
      .then((res) => {
        expect(res.data.length).toEqual(5);
      })
      .then(done, done);
  });
});
