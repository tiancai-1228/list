const db = require("./connection_db");

module.exports = function updateUser(orderId, userId) {
  let result = {};
  return new Promise((resolve, reject) => {
    db(
      `update heroku_4342f4a0a83cd0b.user set orderId ="${orderId}" where id ="${userId}";`,
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
