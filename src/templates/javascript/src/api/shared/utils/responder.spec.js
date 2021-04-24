'use strict';

const { responder } = require('./responder');
const { ApiError } = require('../models/errors');

describe('Util: Responder', () => {
  const url = 'http://test.com';
  const method = 'GET';
  const req = {
    url,
    method,
    body: {},
    header: jest.fn()
  };
  const res = {
    status: function (status) {
      this._status = status;
      return this;
    },
    json: jest.fn()
  };

  describe('When calling the generateMeta method', () => {
    it('should return the meta object', () => {
      const result = responder.generateMeta(req);
      expect(result.url).toEqual(url);
      expect(result.method).toEqual(method);
    });
  });

  describe('When calling the success method', () => {
    const params = { status: 200, message: 'OK', data: ['test'] };

    it('should call the res object with the status, meta and body', () => {
      responder.success(params, req, res);
      expect(res.json).toHaveBeenCalled();
    });

    it('should set the default status, meta and body properties if not provided', () => {
      responder.success({}, req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('When calling the error method', () => {
    const error = new ApiError({ status: 404, message: 'failed' });
    it('should call the res object with the status, meta and body', () => {
      responder.error(error, req, res);
      expect(res.json).toHaveBeenCalled();
    });

    it('should set the status, message and errors to default values if not provided', () => {
      const error = new Error();
      responder.error(error, req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
