const db = require("./connection_db");

module.exports = function userList() {
  let result = {};
  return new Promise((resolve, reject) => {
    db("SELECT * FROM heroku_4342f4a0a83cd0b.user", function (err, rows) {
      if (err) {
        result.status = "error。";
        result.err = "error。";
        reject(result);
        return;
      }
      resolve(rows);
    });
  });
};
