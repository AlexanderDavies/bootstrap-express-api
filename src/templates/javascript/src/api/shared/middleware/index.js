const { errorHandler } = require('./error-handler');
const { requestLogger } = require('./request-logger');
const { requestRateLimiter } = require('./request-rate-limiter');
const { requestSpeedLimiter } = require('./request-speed-limiter');
const { setAccessHeaders } = require('./set-access-headers');
const { unknownRouteHandler } = require('./unknown-route-handler');

module.exports = {
  errorHandler,
  requestLogger,
  requestRateLimiter,
  requestSpeedLimiter,
  setAccessHeaders,
  unknownRouteHandler
};
