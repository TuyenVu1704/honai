import mongoose from 'mongoose';
import { print } from '../helps/print.js';
import dotenv from 'dotenv';
dotenv.config();
function connectMultiDBMongo(uri) {
  const db = mongoose.createConnection(uri);
  db.on('error', function (error) {
    print(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
    db.close().catch(() =>
      print(`MongoDB :: failed to close connection ${this.name}`, 'ERROR')
    );
  });

  db.on('connected', function () {
    mongoose.set('debug', function (col, method, query, doc) {
      print(
        `MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(
          query
        )},${JSON.stringify(doc)})`,
        'DEBUG'
      );
    });
    print(`MongoDB :: connected ${this.name}`, 'SUCCESS');
  });

  db.on('disconnected', function () {
    print(`MongoDB :: disconnected ${this.name}`, 'WARN');
  });

  return db;
}

const DbUser = connectMultiDBMongo(process.env.MONGODB_URI_USER);
const DbAuth = connectMultiDBMongo(process.env.MONGODB_URI_AUTH);

export { DbUser, DbAuth };
