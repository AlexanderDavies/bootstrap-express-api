# CREATE-NODE-API

An opinionated NODE CLI for generating Javascript or Typescript Express apis.

The CLI builds a new Node.js Express template which includes:

- express server
- prettier config
- eslint config
- tsconfig for typescript projects
- jest unit tests
- supertest for integration tests 
- wallaby unit testing configuration
- default docker + docker-compose files
- git initialisation
- VS code launch debug config
- swagger-ui
- openapi route definitions and automated routing
- openapi parameter validation
- nodemon (or ts-node-dev) for hot reloading
- webpack bundling for typescript projects
- logging
- rate limiting and rate slow down
- JSDOC
- Default health route
- Husky and conventional commits to ensure git commit standards

# Installation

    git clone git@github.com:AlexanderDavies/create-node-api.git

    cd create-node-api

    yarn link

# Usage

    create-node-api --name="my-api" --git=true --template="javascript"

    create-node-api -N="my-api" -G=true -T="javascript"
