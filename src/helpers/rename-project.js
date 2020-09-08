'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const Constants = require('../models/constants');

const editPackageJson = (projectName) => {
  const fileName = path.join(process.cwd(), `/${projectName}/`, `package.json`);

  const file = fs.readFileSync(fileName, Constants.FS_ENCODING);

  const fileJson = JSON.parse(file);

  fileJson.name = projectName;

  return fs.writeFileSync(fileName, JSON.stringify(fileJson, null, 2), Constants.FS_ENCODING);
};

const editOpenApiYaml = (projectName) => {
  const fileName = path.join(process.cwd(), `/${projectName}/`, Constants.OPEN_API_PATH);

  const openApiYaml = fs.readFileSync(fileName, Constants.FS_ENCODING);
  const openApiJson = yaml.safeLoad(openApiYaml);

  openApiJson.info.title = projectName;

  const updatedYaml = yaml.safeDump(openApiJson);

  return fs.writeFileSync(fileName, updatedYaml, Constants.FS_ENCODING);
};

const renameProject = (projectName) => {
  editPackageJson(projectName);

  editOpenApiYaml(projectName);

  return true;
};

module.exports = {
  editPackageJson,
  editOpenApiYaml,
  renameProject
};
