'use strict';

const { logger } = require('../utils');
const Constants = require('../models/constants');

/**
 * Error handler middleware
 * @function
 * @param {Object} error - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

exports.errorHandler = async (error, req, res, next) => {
  //if no error then call next to handle the unknown route
  if (!error) {
    return next();
  }
  //extract message and status and return to client
  const message = error.message || Constants.defaultErrorConfig.get('MESSAGE');
  const status = error.status || Constants.defaultErrorConfig.get('STATUS');
  const errors = error.errors || null;

  //log the error
  logger.log({
    level: 'error',
    error
  });

  return res.status(status).json({ message, errors });
};
