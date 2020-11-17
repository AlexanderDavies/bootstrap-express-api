'use strict';

const winston = require('winston');

describe('Util: Logger', () => {
  describe('When importing the logger', () => {
    let createLoggerSpy;

    beforeEach(() => {
      createLoggerSpy = jest.spyOn(winston, 'createLogger');
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should return an instance of the logger', () => {
      const { logger } = require('./logger');
      expect(createLoggerSpy).toHaveBeenCalled();
    });
  
  });
});
