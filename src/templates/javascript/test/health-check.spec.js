const app = require('../src/app');
const Constants = require('../src/api/shared/models/constants');
const request = require('supertest')(app);

describe('Integration - Health Check', function () {
  describe('GET /ping', () => {
    it('Health check should return 200 status', function (done) {
      request
        .get('/api/v1/health/ping')
        .set('Accept', 'application.json')
        .end((err, res) => {
          expect(res.statusCode).toEqual(200);
          expect(res.body.message).toEqual(Constants.healthCheckRouteConfig.get('MESSAGE'));
          done();
        });
    });
  });
});
