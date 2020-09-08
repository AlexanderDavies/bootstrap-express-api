'use strict';

const { setAccessHeaders } = require('./set-access-headers');

describe('Middleware: Set Access Headers', () => {
  describe('When passing the middleware', () => {
    const res = {
      headers: [],
      setHeader: function (header) {
        this.headers.push(header);
      }
    };
    const next = jest.fn();
    it('should set the expected access headers', () => {
      setAccessHeaders({}, res, next);
    });

    it('should call the next function', () => {
      setAccessHeaders({}, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
});
