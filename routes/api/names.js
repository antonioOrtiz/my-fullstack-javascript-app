'use strict';

var express = require('express');
const router = express.Router();

import { MongoClient, ObjectID } from 'mongodb';

const assert = require('assert');
import { config } from '../../config';

var mdb;

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  mdb = db;
});

router.get('/:nameIds', function(req, res) {
  const nameIds = req.params.nameIds.split(',').map(ObjectID);
  let names = {};
  mdb
    .collection('names')
    .find({ _id: { $in: nameIds } })
    .each((err, name) => {
      assert.equal(null, err);

      if (!name) {
        res.send({ names });
        return;
      }
      names[name._id] = name;
    });
});

router.post('/', (req, res) => {
  const contestId = ObjectID(req.body.contestId);
  const name = req.body.newName;

  mdb
    .collection('names')
    .insertOne({ name })
    .then(result =>
      mdb
        .collection('contests')
        .findAndModify(
          { _id: contestId },
          [],
          { $push: { nameIds: result.insertedId } },
          { new: true }
        )
        .then(doc =>
          res.send({
            updatedContest: doc.value,
            newName: { _id: result.insertedId, name }
          })
        )
        .catch(error => {
          console.error(error);
          res.status(404).send('Bad Request');
        })
    );
});

module.exports = router;
