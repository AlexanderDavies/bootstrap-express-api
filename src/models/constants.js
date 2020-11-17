/* istanbul ignore file */
'use strict';

class Constants {
  static nameArgConfig = new Map([
    ['ARG_NAME', '--name'],
    ['SHORT_ARG_NAME', '-N'],
    ['NAME', 'name'],
    ['TYPE', 'input'],
    ['MESSAGE', 'Please choose a project name']
  ]);

  static gitArgConfig = new Map([
    ['ARG_NAME', '--git'],
    ['SHORT_ARG_NAME', '-G'],
    ['NAME', 'git'],
    ['TYPE', 'confirm'],
    ['MESSAGE', 'Do you want to initialize a git repo?'],
    ['DEFAULT', true]
  ]);

  static templateArgConfig = new Map([
    ['ARG_NAME', '--template'],
    ['SHORT_ARG_NAME', '-T'],
    ['NAME', 'template'],
    ['TYPE', 'list'],
    ['MESSAGE', 'Please choose a project template'],
    ['CHOICES', ['JavaScript', 'TypeScript']],
    ['DEFAULT', 'Javascript']
  ]);

  static errorMessages = new Map([
    ['PROJECT_FAILED', 'Failed to initialize the api'],
    ['GIT_FAILED', 'Failed to initialize git'],
    ['PACKAGE_JSON_FAILED', 'Failed to update the package.json api name'],
    ['OPEN_API_FAILED', 'Failed to update the open-api.json api title']
  ]);

  static taskTitles = new Map([
    ['COPY_FILES', 'Copy api files'],
    ['INITIALIZE_GIT', 'Initialize git'],
    ['INSTALL', 'Install dependencies'],
    ['RENAME_PROJECT', 'Rename project files']
  ]);

  static RELATIVE_TEMPLATE_PATH = '../templates/';
  static OPEN_API_PATH = 'src/api/open-api.json';
  static DEFAULT_PROJECT_NAME = 'example-api';
  static FS_ENCODING = 'utf8';
  static ERROR = 'ERROR';
  static SUCCESS = 'SUCCESS';
  static DONE = 'DONE';
  static PROJECT_READY = 'Project ready';
  static INITIALIZING = 'Initializing your api';
  static BORDER = ':::';
}

module.exports = Constants;
