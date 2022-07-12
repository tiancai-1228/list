const db = require("./connection_db");

module.exports = function getOrders(orderId) {
  let result = {};
  return new Promise((resolve, reject) => {
    db(
      `SELECT * FROM heroku_4342f4a0a83cd0b.order where orderId in(${orderId})`,
      function (err, rows) {
        if (err) {
          result.status = "error";
          result.err = "error";
          reject(result);
          return;
        }

        resolve(rows);
      }
    );
  });
};
