'use strict';

const { parseArgs } = require('./helpers/parse-args');
const { promptForArgs } = require('./helpers/prompt-for-args');
const { createProject } = require('./helpers/create-project');

const cli = async (args) => {
  let options = parseArgs(args);
  options = await promptForArgs(options);
  await createProject(options);
};

module.exports = cli;
