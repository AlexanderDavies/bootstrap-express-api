'use strict';

const slowDown = require('express-slow-down');

const Constants = require('../models/constants');

/**
 * Middleware to limit the response time of requests after a certain number in a defined period e.g. 100 in 15 minutes
 * @function
 * @param {Number} windowMs - the window of time in ms in which the max number is set
 * @param {Number} delayAfter - the number of requests before the slow down begins
 * @param {Number} delayMs - the duration of the slow-down of responses after the limit is hit
 */

exports.requestSpeedLimiter = slowDown({
  windowMs: Constants.speedLimiterConfig.get('WINDOW_MS'),
  delayAfter: Constants.speedLimiterConfig.get('DELAY_AFTER'),
  delayMs: Constants.speedLimiterConfig.get('DELAY_MS')
});
