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
      throw new Error('Error: Id is not exist.');
    })
    .onGet('http://example.com/users/interceptor')
    .reply(200, "Intercepting request and response")
    .onGet('http://example.com/users/interceptor/error')
    .reply(function() {
      throw new Error('Intercepting Response error');
    })
    .onPost('http://example.com/users', {id: "abc", name: "AAA"})
    .reply(201)
    .onPost('http://example.com/users', {id: "def", name: "BBB"})
    .reply(500, "Id is already exist.")
    .onAny().reply(200, "Response data");



  axios.interceptors.request.use(function(config) {
    config.headers.token = "abcabc";
    return config;
  }, function (error) {
      return Promise.reject(error);
  });

  axios.interceptors.response.use(function(response) {
    if(typeof response.data === 'string'){
      if( response.data.includes('Intercepting')){
        let res = response.data.toUpperCase();
        response.data = res;
      }
    }
    return response;
  }, function (error) {
    if (error.message.includes('Intercepting')){
      let res = error.message.toUpperCase();
      error.message = res;
    }
    return Promise.reject(error);
  });



  test("return data when the get request success", () => {
    return axios.get('http://example.com/users')
      .then(res => {
        expect(res.data.length).toBe(2);
      });

  });

  test("return an error when the get request failed", () => {
    return axios.get('http://example.com/users/100')
      .catch(error => {
        expect(error.message).toBe('Error: Id is not exist.');
      });

  });

  test("return response with status success when the post method success", () => {
    return axios.post('http://example.com/users', {id: "abc", name: "AAA"} )
      .then(res => {
        expect(res.status).toBe(201);
      });

  });

  test("return an error when the post method failure", () => {
    return axios.post('http://example.com/users', {id: "def", name: "BBB"} )
      .catch(error => {
        expect(error.response.status).toBe(500);
        expect(error.response.data).toMatch(/Id is already exist/);
      });

  });

  test("return token which is add by request interceptor in the header", () => {

    return axios.get('http://example.com/users/interceptor')
      .then(res => {
        expect(res.config.headers.token).toMatch("abcabc");
      });

  });

  test("return data which is in uppercase by response interceptor ", () => {

    return axios.get('http://example.com/users/interceptor')
      .then(res => {
        expect(res.data).toMatch(/INTERCEPTING/);
      });

  });

  test("return an error whose message is in uppercase by response interceptor ", () => {

    return axios.get('http://example.com/users/interceptor/error')
      .catch(error => {
        expect(error.message).toMatch(/RESPONSE ERROR/);
      });

  });

  test("return multiple response by parameters of spread function when sending multiple requests", () => {

    return axios.all([
      axios.get('/any1'),
      axios.get('/any2'),
      axios.get('/any3')
    ])
      .then(axios.spread(function (Response1, Response2, Response3) {
        expect(Response1.data).toBe('Response data');
        expect(Response2.data).toBe('Response data');
        expect(Response3.data).toBe('Response data');
      }));

  });

  test("return an error when a request is canceled.", () => {
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
