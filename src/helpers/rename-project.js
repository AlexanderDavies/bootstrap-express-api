'use strict';

const fs = require('fs');
const path = require('path');

const Constants = require('../models/constants');

const editPackageJson = (projectName) => {
  const fileName = path.join(process.cwd(), `/${projectName}/`, 'package.json');

  const file = fs.readFileSync(fileName, Constants.FS_ENCODING);

  const fileJson = JSON.parse(file);

  fileJson.name = projectName;

  return fs.writeFileSync(fileName, JSON.stringify(fileJson, null, 2), Constants.FS_ENCODING);
};

const editOpenApiJson = (projectName) => {
  const fileName = path.join(process.cwd(), `/${projectName}/`, Constants.OPEN_API_PATH);

  const openApiJson = JSON.parse(fs.readFileSync(fileName, Constants.FS_ENCODING));

  openApiJson.info.title = projectName;

  return fs.writeFileSync(fileName, JSON.stringify(openApiJson, null, 2), Constants.FS_ENCODING);
};

const renameProject = (projectName) => {
  editPackageJson(projectName);

  editOpenApiJson(projectName);

  return true;
};

module.exports = {
  editPackageJson,
  editOpenApiJson,
  renameProject
};
