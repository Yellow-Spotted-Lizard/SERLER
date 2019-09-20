const express = require('express');
const db = require('../model/db');
const Evidence = require('../model/evidences')

const router = express.Router();

/* debug only
var ev1 = new Evidence({
  title: 'software engineering',
  url: 'http://wikipedia.com/software_engineering',
  authors: [{
    firstName: 'Foo',
    lastName: 'Bar'
  },{
    firstName: 'Foobar',
    lastName: 'Baz'
  }]
});

console.error(ev1);

// ev1.save(err => {
//   console.error('error', err);
// })

const ev1obj = ev1.toObject();
Evidence.updateOne({_id: ev1obj._id}, ev1obj, {upsert: true}, function (err, raw) {
  console.error('insert error', err, raw);
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send();
});

module.exports = router;
