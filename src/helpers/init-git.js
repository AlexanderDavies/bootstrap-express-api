'use strict';

const execa = require('execa');

exports.initGit = (options) => {
  return execa('git', ['init'], {
    cwd: options.targetDirectory
  });
};
