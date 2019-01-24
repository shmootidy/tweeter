'use strict';

const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongodb://localhost:27017/tweeter';

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // connection to `test-tweets db` starts here
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // any program logic that needs the connection is invoked here


  // at end, close the connxn
  db.close();
});