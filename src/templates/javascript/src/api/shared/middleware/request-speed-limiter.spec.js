'use strict';

const { requestSpeedLimiter } = require('./request-speed-limiter');

jest.mock('express-slow-down', () => (arg) => arg);

describe('Middleware: Rate Limiter', () => {
  it('should return the rate limiter middleware', () => {
    expect(requestSpeedLimiter.delayMs).toEqual(500);
  });
});
