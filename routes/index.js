'use strict';

var express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    content: '...'
  });
});

module.exports = router;

