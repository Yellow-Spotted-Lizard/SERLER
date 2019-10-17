const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const adminService = require('./services/admin-service');
const studyService = require('./services/study-service');

// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const evidencesRouter = require('./routes/evidences');
const adminRouter = require('./routes/admin');

const auth = require("./auth");

const app = express();
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

const router = express.Router();
router.use('/users', usersRouter);
router.use('/evidences', evidencesRouter);
router.use('/admin', adminRouter);

// app.use('/', indexRouter);
app.use('/api/v1', router);

// Seed users
adminService.seedUsers(null);

// Seed studies
studyService.seedStudies(null);

module.exports = app