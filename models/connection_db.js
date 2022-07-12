const mysqlt = require("mysql");

const pool = mysqlt.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bbcc21784bce3b",
  password: "d0fd6568",
  database: "heroku_4342f4a0a83cd0b",
});

var query = function (sql, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = undefined;
  }
  pool.getConnection(function (err, conn) {
    if (err) {
      callback(err, null, null);
    } else {
      conn.query(sql, options, function (err, results, fields) {
        // callback
        callback(err, results, fields);
      });
      // connection 的釋放需要在此 release，而不能在 callback 中 release
      conn.release();
    }
  });
};

module.exports = query;
