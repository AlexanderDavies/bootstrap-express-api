'use strict';

const { v4 } = require('uuid');

/**
 * Utility function to create a guid Id for x-request-id headers
 * @function
 */

exports.generateXRequestId = () => {
  return v4();
};
