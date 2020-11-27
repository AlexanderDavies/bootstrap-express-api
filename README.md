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
- Husky and conventional commits to ensure git commit standards
- VS code launch debug config
- swagger-ui
- openapi route definitions and automated routing
- openapi validation
- nodemon (or ts-node-dev) for hot reloading
- webpack bundling for typescript projects
- logging
- rate limiting
- rate slow down
- JSDOC
- Default health route

# Prerequisites

requires node >=12.13.0

# Usage

    npx create-node-api --name="my-api" --git=true --template="javascript"

    npx create-node-api -N="my-api" -G=true -T="javascript"


Note: The README contained inside the newly created project provides detail on the api folder structure and its usage