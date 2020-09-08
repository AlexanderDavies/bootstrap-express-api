'use strict';

const { requestLogger } = require('./request-logger');
const { logger } = require('../utils');

jest.mock('../utils', () => ({
  logger: {
    log: jest.fn()
  }
}));

describe('Middleware: RequestLogger', () => {
  let req = {
    body: {},
    header: () => {}
  };
  const res = {};
  const next = jest.fn();

  it('Should log the request', () => {
    requestLogger(req, res, next);
    expect(logger.log).toHaveBeenCalled();
  });

  it('Should call the next function', () => {
    requestLogger(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
