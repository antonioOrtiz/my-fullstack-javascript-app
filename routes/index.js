'use strict';

var express = require('express');

const router = express.Router();

import serverRender from '../serverRender';

router.get(['/', '/contest/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

module.exports = router;
