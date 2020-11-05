/* istanbul ignore file */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { connector } = require('swagger-routes-express');
const swaggerUi = require('swagger-ui-express');
const { OpenApiValidator } = require('express-openapi-validate');

const {
  requestRateLimiter,
  requestSpeedLimiter,
  requestLogger,
  setAccessHeaders,
  errorHandler,
  unknownRouteHandler
} = require('./api/shared/middleware');
const controllers = require('./api/index.controllers');
const openApi = require('./api/open-api.json');

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

//validate requrest
const validator = new OpenApiValidator(openApi);

app.use(validator.match());

//serve swagger-ui
if (process.env.SWAGGER_UI) {
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
