'use strict';

var express = require('express');
const router = express.Router();
const assert = require('assert');
import { MongoClient, ObjectID } from 'mongodb';
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
    .project({
      categoryName: 1,
      contestName: 1
    })
    .each((err, contest) => {
      assert.equal(null, err);

      if (!contest) {
        res.send({ contests });
        return;
      }
      contests[contest._id] = contest;
    });
});

router.get('/:contestId', function(req, res) {
  mdb
    .collection('contests')
    .findOne({ _id: ObjectID(req.params.contestId) })
    .then(contest => res.send(contest))
    .catch(console.error);
});

module.exports = router;
