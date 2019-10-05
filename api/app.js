var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const adminService = require('./services/admin-service');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var evidencesRouter = require('./routes/evidences');
var adminRouter = require('./routes/admin');

const auth = require("./auth");

var app = express();
const cors = require('cors');
app.use(cors());

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  console.info('under production environment')
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
}

app.use(logger('dev'));
app.use(express.json());
app.use(auth);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

var router = express.Router();
router.use('/users', usersRouter);
router.use('/evidences', evidencesRouter);
router.use('/admin', adminRouter);

// app.use('/', indexRouter);
app.use('/api/v1', router);

// Seed users
adminService.seedUsers(null);

module.exports = app;
