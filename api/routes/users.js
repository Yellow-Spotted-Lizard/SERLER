var express = require('express');
var router = express.Router();
const userService = require('../services/user-service');

/* GET all user users */
router.get('/', function(req, res, next) {
  console.info('method: get all users');
 
  var userList = userService.getUserList(res);
});

/* GET user by login. */
router.get('/:id', function(req, res, next)  {
  var id = req.params.id;
  console.info('method: get user by id = \'' + id + '\'');

  var user = userService.getUserByLogin(id, res);
});

module.exports = router;
