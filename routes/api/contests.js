'use strict';

var express = require('express');
const router = express.Router();
const MongoClient = require('mongodb');
const assert = require('assert');
import { config } from '../../config';

var mdb;

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  mdb = db;
});

router.get('/', function(req, res) {
  let contests = {};
  mdb
    .collection('contests')
    .find({})
    .each((err, contest) => {
      assert.equal(null, err);

      if (!contest) {
        res.send(contests);
        return;
      }
      contests[contest.id] = contest;
    });
});

router.get('/:contestId', function(req, res) {
  let contest = contests[req.params.contestId];
  contest.description =
    'Food truck gluten-free banksy, fap occupy bespoke whatever mustache.  Occupy kogi kale chips chillwave, odd future typewriter iphone twee truffaut viral ethical artisan put a bird on it single-origin coffee banh mi.  Master cleanse brunch occupy trust fund marfa yr.  Chillwave ennui fap, wes anderson cliche cosby sweater brooklyn vegan organic.  Shoreditch PBR semiotics, chillwave art party photo booth terry richardson.  Synth ennui semiotics mustache pickled, biodiesel food truck cosby sweater readymade mixtape letterpress pour-over leggings.  Food truck freegan vinyl thundercats, post-ironic ennui wes anderson banh mi four loko synth photo booth authentic 3 wolf moon.';
  res.send(contest);
});

module.exports = router;
