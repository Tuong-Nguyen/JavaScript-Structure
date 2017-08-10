/**
 * Created by nkim on 8/8/2017.
 */
import axios from 'axios';
import nock from 'nock';
import MockAdapter from 'axios-mock-adapter';

describe("Axios", () => {


  // nock('http://example.com')
  //   .get('/users')
  //   .reply(200, "abc");
    // .get('/users/100')
    // .replyWithError("User is not exist.");
  let mock = new MockAdapter(axios);
  mock.onGet('http://example.com/users')
    .reply(200,
      [
        {id: 1, name: "A"},
        {id: 2, name: "B"}
      ]
    )
    .onGet('http://example.com/users/100')
    .reply(function(){
      throw new Error('An error was thrown');
    })
    .onGet('http://example.com/users/interceptor')
    .reply(200, "Intercepting request and response")
    .onGet('http://example.com/users/interceptor/error')
    .reply(function() {
      throw new Error('Intercepting response error');
    })
    .onPost('http://example.com/users', {id: "abc", name: "AAA"})
    .reply(201)
    .onPost('http://example.com/users', {id: "def", name: "BBB"})
    .reply(500, "Id is already exist.")
    .onAny().reply(200, "Any request");



  axios.interceptors.request.use(function(config) {
    console.log('Intercepting request');
    console.log(config);
    return config;
  }, function (error) {
      console.log("Intercepting request error");
      console.log(error);
      return Promise.reject(error);
  });

  axios.interceptors.response.use(function(response) {
    console.log('Intercepting response');
    console.log(response);
    return response;
  }, function (error) {
    console.log("Intercepting response error");
    console.log(error);
    return Promise.reject(error);
  });



  test("get method success", () => {
    return axios.get('http://example.com/users')
      .then(res => {
        expect(res.data.length).toBe(2);
      });

  });

  test("get method failure", () => {
    return axios.get('http://example.com/users/100')
      .catch(error => {
        expect(error.message).toBe('An error was thrown');
      });

  });

  test("post method success", () => {
    return axios.post('http://example.com/users', {id: "abc", name: "AAA"} )
      .then(res => {
        expect(res.status).toBe(201);
      });

  });

  test("post method failure", () => {
    return axios.post('http://example.com/users', {id: "def", name: "BBB"} )
      .catch(error => {
        expect(error.message).toMatch(/failed/);
        expect(error.response.data).toMatch(/already exist/);
      });

  });

  test("intercepting request", () => {

    return axios.get('http://example.com/users/interceptor')
      .then(res => {
        console.log("Receive the response");
        expect(res.data).toMatch(/Intercepting/);
      });

  });

  test("intercepting response", () => {

    return axios.get('http://example.com/users/interceptor')
      .then(res => {
        console.log("Receive the response");
        expect(res.data).toMatch(/Intercepting/);
      });

  });

  test("intercepting response error", () => {

    return axios.get('http://example.com/users/interceptor/error')
      .catch(error => {
        console.log("Response error");
        expect(error.message).toMatch(/response error/);
      })

  });

  test("Multiple requests", () => {

    return axios.all([
      axios.get('/any1'),
      axios.get('/any2'),
      axios.get('/any3')
    ])
      .then(axios.spread(function (Response1, Response2, Response3) {
        console.log(Response1.data);
        console.log(Response2.data);
        console.log(Response3.data);
      }));

  });

  test("Cancelation", () => {
    var CancelToken = axios.CancelToken;
    var source = CancelToken.source();

    source.cancel("Cancel request");

    return axios.get('http://example.com/users', {
      cancelToken: source.token
    })
      .then(res => {
        console.log('run into then block');
      })
      .catch(function(error){
        expect(axios.isCancel(error)).toBe(true);
        expect(error.message).toBe("Cancel request");
      });
  });


});
