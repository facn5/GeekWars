const databaseConnection = require('../db_connection.js');


const selectquery = (sql, cb) => {
  databaseConnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

const insertquery = (sql, args, cb) => {
  databaseConnection.query(
    s,
    args,
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

const updatequery = (sql, cb) => {
  databaseConnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

module.exports = {
  selectquery,
  insertquery,
  updatequery
};
