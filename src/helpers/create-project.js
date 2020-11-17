'use strict';

const path = require('path');
const Constants = require('../models/constants');
const { get } = require('lodash');
const chalk = require('chalk');
const Listr = require('listr');

const { copyFiles } = require('./copy-files');
const { initGit } = require('./init-git');
const { installPackages } = require('./install-packages');
const { renameProject } = require('./rename-project');

exports.createProject = async (opts) => {
  try {
    const targetDirectory = path.join(
      process.cwd(),
      `/${get(opts, Constants.nameArgConfig.get('NAME'))}`
    );

    path.join(
      __dirname,
      Constants.RELATIVE_TEMPLATE_PATH,
      get(opts, Constants.templateArgConfig.get('NAME')).toLowerCase()
    );
    const templateDirectory = path.join(
      __dirname,
      Constants.RELATIVE_TEMPLATE_PATH,
      get(opts, Constants.templateArgConfig.get('NAME')).toLowerCase()
    );

    const options = {
      ...opts,
      targetDirectory,
      templateDirectory
    };

    console.log(chalk.green.bold(Constants.BORDER), Constants.INITIALIZING, Constants.BORDER);

    console.log(
      path.join(
        process.cwd(),
        `/${get(options, Constants.nameArgConfig.get('NAME'))}/`,
        Constants.OPEN_API_PATH
      )
    );

    const tasks = new Listr([
      {
        title: Constants.taskTitles.get('COPY_FILES'),
        task: () => copyFiles(options)
      },
      {
        title: Constants.taskTitles.get('INITIALIZE_GIT'),
        task: () => initGit(options),
        enabled: () => options.git
      },
      {
        title: Constants.taskTitles.get('INSTALL'),
        task: () => installPackages(get(options, 'targetDirectory'))
      },
      {
        title: Constants.taskTitles.get('RENAME_PROJECT'),
        task: () => renameProject(get(options, Constants.nameArgConfig.get('NAME')))
      },
    ]);

    await tasks.run();

    console.log(Constants.PROJECT_READY, chalk.green.bold(Constants.DONE));
  } catch (err) {
    console.log(err);
    console.error(Constants.errorMessages.get('PROJECT_FAILED'), chalk.red.bold(Constants.ERROR));
  }
};
