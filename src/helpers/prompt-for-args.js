'use strict';

const inquirer = require('inquirer');
const { get } = require('lodash');

const Constants = require('../models/constants');

exports.promptForArgs = async (options) => {
  let questions = [];

  if (!get(options, 'name')) {
    questions.push({
      type: Constants.nameArgConfig.get('TYPE'),
      name: Constants.nameArgConfig.get('NAME'),
      message: Constants.nameArgConfig.get('MESSAGE')
    });
  }

  if (!get(options, 'git')) {
    questions.push({
      type: Constants.gitArgConfig.get('TYPE'),
      name: Constants.gitArgConfig.get('NAME'),
      message: Constants.gitArgConfig.get('MESSAGE'),
      default: Constants.gitArgConfig.get('DEFAULT')
    });
  }

  if (!get(options, 'template')) {
    questions.push({
      type: Constants.templateArgConfig.get('TYPE'),
      name: Constants.templateArgConfig.get('NAME'),
      message: Constants.templateArgConfig.get('MESSAGE'),
      choices: Constants.templateArgConfig.get('CHOICES'),
      default: Constants.templateArgConfig.get('DEFAULT')
    });
  }

  const answers = await inquirer.prompt(questions);

  return {
    name: get(options, 'name') || get(answers, 'name'),
    git: get(options, 'git') || get(answers, 'git'),
    template: get(options, 'template') || get(answers, 'template')
  };
};
