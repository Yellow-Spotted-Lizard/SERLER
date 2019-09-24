var express = require('express');
var router = express.Router();
const sysusers = require('../model/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.info('users');
 
  var userList = sysusers.getInitialUserList();
  res.json(userList);
});

module.exports = router;
