# API template

## TODO

- this api uses `yarn`, can be problem with jenkins
- coverage reports generated in `reports` dir, jenkins/sonarcube processing paths are different(`coverage` and `reports`), need to amend jenkins settings to use `reports`
- remove jenkins update of package version. version should be changed by `yarn run release`
- use eslint instead of tslint

## Summary

## Getting Started

This API requires node `10.13.0` and npm `6.13.7`.

To run this locally:

```
1. Clone the repository
2. npm install
3. npm run dev
```

### Accessing the Swagger UI

By default if you have the API running locally, you can access the Swagger UI by pointing your browser to [http://localhost:8080](http://localhost:8080).

## NPM Commands

Runs unit tests

```
npm test
```

Runs e2e tests (can be run on pre prod env)

```
npm test:e2e
```

## Dev tools

Cspell used for check commit message and staged changes upon commit.
Commit message should be in jira style with ticket number in the beginning
Staged changes are lining before commit

Suggested VSC plugins: cspell, prettier to check errors in IDE

To add `wrong word` into cspell dictionary use `cspell.json`
Project uses https://www.conventionalcommits.org/en/v1.0.0/
Commits should looks like:

`git commit -m 'docs(CAP-1309): Add more descriptions'`

Versioning provided by https://github.com/conventional-changelog/standard-version

Run `npm run release` to update changelog and package number

### Folders structure

- bin - executables
- reports - test reports
- src - sources
- test - tests
- tmp - temporary folder

### Folder for code quality reports

Generated files:

- cobertura-coverage.xml
- jscpd-report.xml
- lcov-report
- lcov.info

## Configuration

All configuration settings are stored in `/config/env.js`. This repository uses `nconf` to manage configuration.

| Variable | Allow Options         | Default | Notes |
| -------- | --------------------- | ------- | ----- |
| port     | any number above 1000 | 8080    |       |

## Frequently Asked Questions

```

```
