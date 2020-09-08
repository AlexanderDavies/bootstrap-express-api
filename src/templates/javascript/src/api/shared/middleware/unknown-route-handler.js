'use strict';

const Constants = require('../models/Constants');

/**
 * Unknown Routes Handler
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

exports.unknownRouteHandler = (req, res) => {
  return res.status(Constants.unknownRouteConfig.get('STATUS')).json({
    message: Constants.unknownRouteConfig.get('MESSAGE')
  });
};
