'use strict';

const { generateXRequestId } = require('./generate-x-request-id');

describe('Util: Generate X-Request-Id', () => {
  describe('When generating the x-request-id', () => {
    it('should return a 36 character guid', () => {
      const result = generateXRequestId();
      expect(result.length).toEqual(36);
    });
  });
});
