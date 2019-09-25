const mongoose = require('mongoose');
var debug = require('debug')('api:mongodb');

const db_name = process.env.MONGODB_DB_NAME;
const url = process.env.MONGODB_URI;

mongoose
.connect(url, {dbName: db_name})
.catch(err => {
  console.error(`cannot connect to mongodb: ${url}, db name: ${db_name}`);
});

debug(`use mongodb ${url}, db name: ${db_name}`);
console.info(`use mongodb ${url}, db name: ${db_name}`);
