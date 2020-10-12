'use strict';

const { requestRateLimiter } = require('./request-rate-limiter');
const Constants = require('../models/constants');

jest.mock('express-rate-limit', () => (arg) => arg);

describe('Middleware: Rate Limiter', () => {
  it('should return the rate limiter middleware', () => {
    expect(requestRateLimiter.max).toEqual(Constants.rateLimiterConifg.get('MAX'));
    expect(requestRateLimiter.windowMs).toEqual(Constants.rateLimiterConifg.get('WINDOW_MS'));
  });
});
