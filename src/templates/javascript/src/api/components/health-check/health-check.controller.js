'use strict';

const { name, version, description } = require('../../../../package.json');
const Constants = require('../../shared/models/constants');
const { responder } = require('../../shared/utils');

/**
 * Controller to handle health check ping request
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

exports.healthCheck = (req, res) => {
  return responder.success(
    {
      status: Constants.healthCheckRouteConfig.get('STATUS'),
      message: Constants.healthCheckRouteConfig.get('MESSAGE'),
      data: {
        name,
        version,
        description,
        uptime: process.uptime().toString()
      }
    },
    req,
    res
  );
};
