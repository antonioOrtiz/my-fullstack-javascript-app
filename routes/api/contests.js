'use strict';

var express = require('express');
var data = require('../../src/testData');
const router = express.Router();

router.get('/', function(req, res) {
  res.send({ contests: data.contests });
});

module.exports = router;
