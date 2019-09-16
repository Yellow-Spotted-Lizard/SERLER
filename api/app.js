var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  console.info('under production environment')
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
