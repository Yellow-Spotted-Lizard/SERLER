const mongoose = require('mongoose');
var debug = require('debug')('api:mongodb');

const db_name = process.env.MONGODB_DB_NAME || 'serler_debug';
const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';

mongoose
  //.connect(url, {dbName: db_name})
  .connect(url + '/' + db_name,  { useNewUrlParser: true }) 
  .catch(err => {
    console.error(`cannot connect to mongodb: ${url}, db name: ${db_name}`);
  });

debug(`use mongodb ${url}, db name: ${db_name}`);
