/* istanbul ignore file */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const YAML = require('yamljs');
const { connector } = require('swagger-routes-express');
const swaggerUi = require('swagger-ui-express');
const { OpenApiValidator } = require('express-openapi-validate');
const path = require('path');

const {
  requestRateLimiter,
  requestSpeedLimiter,
  requestLogger,
  setAccessHeaders,
  errorHandler,
  unknownRouteHandler
} = require('./api/shared/middleware');
const controllers = require('./api/index.controllers');
const Constants = require('./api/shared/models/constants');

const app = express();

app.use(requestLogger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//add rate-limiter middleware
app.use(requestRateLimiter);

//add speed limiter middleware
app.use(requestSpeedLimiter);

//set the access/origin headers
app.use(setAccessHeaders);

//import opanapi spec
const openApi = YAML.load(path.join(__dirname, './api/open-api.yaml'));

//validate requrest
const validator = new OpenApiValidator(openApi);

app.use(validator.match());

//serve swagger-ui if not in production
if (process.env.NODE_ENV !== Constants.environments.get('PRODUCTION')) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApi));
}

//serve open api routes
const connect = connector(controllers, openApi, {
  security: {},
  middleware: {},
  apiSeparator: '/'
});

connect(app);

//Handle errors centrally
app.use(errorHandler);

app.use(unknownRouteHandler);

module.exports = app;
