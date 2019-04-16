const databaseConnection = require('../db_connection.js');


selectquery = (sql, cb) => {
  databaseConnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

insertquery = (sql, args, cb) => {
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

updatequery = (sql, cb) => {
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
