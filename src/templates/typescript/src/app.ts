/* istanbul ignore file */

import express from 'express';
import bodyParser from 'body-parser';
import { connector } from 'swagger-routes-express';
import swaggerUi from 'swagger-ui-express';
import { OpenApiValidator } from 'express-openapi-validate';

import {
  requestRateLimiter,
  requestSpeedLimiter,
  requestLogger,
  setAccessHeaders,
  errorHandler,
  unknownRouteHandler
} from './api/shared/middleware';
import controllers from './api/index.controllers';

//required to set the type as any
const openApi: any = require('./api/open-api.json');

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

//serve swagger-ui if not in production
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

export default app;
