const mongoose = require('mongoose');
var debug = require('debug')('api:mongodb');

const db_name = process.env.MONGODB_DB_NAME;
const url = process.env.MONGODB_URI + '/' + db_name;

mongoose.connect(url);

debug('use mongodb ' + url);