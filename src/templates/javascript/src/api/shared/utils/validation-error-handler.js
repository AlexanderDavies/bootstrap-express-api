'use strict';

const expressValidator = require('express-validator');
const { ApiError } = require('../models/errors');

const validate = (req) => {
  const errors = expressValidator.validationResult(req);

  if (!errors.isEmpty()) {
    const message = errors.array()[0].msg;
    const error = new ApiError({ message, status: 400, errors: errors.array() });
    throw error;
  }

  return true;
};

module.exports.validate = validate;
