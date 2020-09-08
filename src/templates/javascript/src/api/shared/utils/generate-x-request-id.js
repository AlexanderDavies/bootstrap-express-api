'use strict';

const { v4 } = require('uuid');

exports.generateXRequestId = () => {
  return v4();
};
