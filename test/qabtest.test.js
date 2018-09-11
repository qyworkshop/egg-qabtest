'use strict';

const mock = require('egg-mock');

describe('test/qabtest.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/qabtest-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, qabtest')
      .expect(200);
  });
});
