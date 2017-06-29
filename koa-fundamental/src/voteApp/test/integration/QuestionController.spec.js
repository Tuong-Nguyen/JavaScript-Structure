/**
 * Created by nctuong on 6/28/2017.
 */

describe('Question controller', () => {
  it('# new question view', function (done) {
    this.request.get('/question')
      .expect('Content-type', /html/)
      .expect(200, done);
  });

  it('# store valid question', function(done) {
    const question = {
      title: 'A questions?',
      tagString: 'tag1, tag2, tag3'
    };

    this.request.post('/question')
      .send(question)
      .expect(302)
      .expect('location', /question\/[0-9a-fA-F]{24}/)
      .end(done);
  });
});
