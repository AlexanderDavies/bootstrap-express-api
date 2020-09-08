'use strict';

const { projectInstall } = require('pkg-install');

exports.installPackages = (targetDirectory) => {
  return projectInstall({
    prefer: 'yarn',
    cwd: targetDirectory
  });
};
