/**
 * Created by nctuong on 6/27/2017.
 */


describe('home', () => {
  it('# return the homepage', function (done) {
    this.request.get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
