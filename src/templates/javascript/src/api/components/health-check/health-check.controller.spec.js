'use strict';

const { healthCheck } = require('./health-check.controller');
const { responder } = require('../../shared/utils');
const Constants = require('../../shared/models/Constants');

describe('Health Check Controller', () => {
  const req = {
    body: {},
    header: jest.fn()
  };
  const res = {
    status: jest.fn(),
    json: jest.fn()
  };
  const next = jest.fn();
  let responderSuccessMock;
  const data = { message: 'OK', status: 200 };

  beforeEach(() => {
    responderSuccessMock = jest
      .spyOn(responder, 'success')
      .mockImplementation((data, req, res) => data);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return status 200 with pong message', () => {
    const result = healthCheck(req, res, next);

    expect(responderSuccessMock).toHaveBeenCalled();
    expect(result.status).toEqual(Constants.healthCheckRouteConfig.get('STATUS'));
    expect(result.message).toEqual(Constants.healthCheckRouteConfig.get('MESSAGE'));
    expect(result.data).not.toBe(null);
  });
});
