const db = require("./connection_db");

module.exports = function addOrder(message) {
  let result = {};
  return new Promise((resolve, reject) => {
    db(
      `INSERT INTO heroku_4342f4a0a83cd0b.order VALUES (null,"${message}");`,
      function (err, rows) {
        if (err) {
          result.status = "error。";
          result.err = "error。";
          reject(result);
          return;
        }
        resolve(rows);
      }
    );
  });
};
