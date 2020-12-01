'use strict';

const { get } = require('lodash');

const { logger } = require('../utils');

/**
 * Middleware to log the request
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

exports.requestLogger = (req, res, next) => {
  const requestData = {
    timestamp: new Date().toString(),
    url: get(req, 'url'),
    method: get(req, 'method'),
    headers: JSON.stringify(get(req, 'headers')),
    ip: get(req, 'connection.remoteAddress'),
    body: get(req, 'body'),
    params: get(req, 'params'),
    query: get(req, 'query')
  };

  logger.log({
    level: 'info',
    request: requestData,
    message: 'REQUEST'
  });

  next();
};
