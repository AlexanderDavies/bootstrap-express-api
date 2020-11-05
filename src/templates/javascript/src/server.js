/* istanbul ignore file */
'use strict';

const app = require('./app');
const { normalizePort, logger } = require('./api/shared/utils');
const Constants = require('./api/shared/models/constants');

if (process.env.NODE_ENV !== Constants.environments.get('PRODUCTION')) {
  require('dotenv').config();
}

const server = app.listen(normalizePort(process.env.PORT || 8080));

//log the connection
logger.log({
  level: Constants.logLevels.get('INFO'),
  message: `connected on ${server.address().port}`
});
