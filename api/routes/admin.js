var express = require('express');
var router = express.Router();
const adminService = require('../services/admin-service');

/* The list of admin operations */
router.get('/', function(req, res, next)  {
    console.info('method: admin');
  
    var operations = [];
    operations.push('users/seed');
    operations.push('users/dispose');

    res.json(operations);
});

/* Seed users */
router.get('/users/seed', function(req, res, next)  {
    console.info('method: admin/users/seed');
  
    var result = adminService.seedUsers();
    res.json(result);
});

/* Dispose users */
router.get('/users/dispose', function(req, res, next)  {
    console.info('method: admin/users/dispose');
  
    var result = adminService.disposeUsers();
    res.json(result);
});

module.exports = router;
