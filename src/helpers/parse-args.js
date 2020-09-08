'use strict';

const arg = require('arg');

const Constants = require('../models/constants');

exports.parseArgs = (rawArgs) => {
  const args = arg(
    {
      '--name': String,
      '--git': Boolean,
      '--template': String,
      '-N': Constants.nameArgConfig.get('ARG_NAME'),
      '-G': Constants.gitArgConfig.get('ARG_NAME'),
      '-T': Constants.templateArgConfig.get('ARG_NAME')
    },
    {
      argv: rawArgs.slice(2)
    }
  );

  return {
    name: args[Constants.nameArgConfig.get('ARG_NAME')],
    git: args[Constants.gitArgConfig.get('ARG_NAME')],
    template: args[Constants.templateArgConfig.get('ARG_NAME')]
  };
};
