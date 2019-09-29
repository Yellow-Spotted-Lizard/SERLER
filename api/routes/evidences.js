const express = require('express');
const db = require('../model/db');
const Evidence = require('../model/evidences')
var debug = require('debug')('api:route:evidences');

const router = express.Router();

router.get('/', function(req, res, next) {
  Evidence
  .find()
  .limit(20)
  .exec()
  .then(evs => {
    debug('found evidences and return: ', evs);
    res.json(evs);
  })
  .catch(err => {
    debug('error in find evidence: ', err);
    res.status(500).send('an error occurred: ' + err);
  });
});

router.get('/search', function(req, res, next) {
  let title_contains = req.query.title_contains;
  let limit = req.query.limit || 20;

  Evidence
  .find({"title": { "$regex": title_contains, "$options": "i" }})
  .limit(limit)
  .exec()
  .then(evs => {
    debug(`search evidences query ${JSON.stringify(req.query)} and return: ${evs}`);
    res.json(evs);
  })
  .catch(err => {
    debug(`error in find evidence for query: ${JSON.stringify(req.query)}, error: ${err}`);
    res.status(500).send('an error occurred: ' + err);
  });
});

module.exports = router;
