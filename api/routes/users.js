var express = require('express');
var router = express.Router();
const users = require('../model/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.info('method: get all users');
 
  var userList = users.getInitialUserList();
  res.json(userList);
});

/* GET user by id. */
router.get('/:id', function(req, res, next)  {
  var id = req.params.id;
  console.info('method: get user by id = \'' + id + '\'');

  var user = users.getUserById(id);
  res.json(user);
});

module.exports = router;
