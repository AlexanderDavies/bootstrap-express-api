'use strict';

const { unknownRouteHandler } = require('./unknown-route-handler');

describe('Middleware: Unknown Route', () => {
  let res;

  beforeEach(() => {
    res = {
      _status: null,
      _body: null,
      status: function (status) {
        this._status = status;
        return this;
      },
      json: function (obj) {
        this._body = obj;
        return this;
      }
    };
  });

  it(`should return status 404 with message 'resource does not exist'`, () => {
    const result = unknownRouteHandler({}, res, () => {});

    expect(result._status).toEqual(404);
    expect(result._body.message).toEqual('resource does not exist');
  });
});
