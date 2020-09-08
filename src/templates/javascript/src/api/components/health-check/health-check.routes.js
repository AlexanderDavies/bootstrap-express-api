'use strict';

const express = require('express');

const router = express.Router();

const healthCheckController = require('./health-check.controller');

router.get('', healthCheckController.handlePing);

module.exports = router;
