'use strict';

/**
 * Utiltiy functiion to nomalize the process.ENV port value
 * @function
 * @param {(number|string)} val - the port value
 */

exports.normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
};
