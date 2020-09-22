'use strict';

const ncp = require('ncp');
const { promisify } = require('util');

const copy = promisify(ncp);

exports.copyFiles = (options) => {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false
  });
};
