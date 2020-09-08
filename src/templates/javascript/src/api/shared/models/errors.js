'use strict';

/**
 * Creates an ApiError object which extends the native JS Error object
 * @constructor
 * @param {{message: string, status: number} errorParams description - the error paramaters
 */

class ApiError extends Error {
  status;
  errors;

  constructor({ message = '', status = 500, errors = null }) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}

exports.ApiError = ApiError;
