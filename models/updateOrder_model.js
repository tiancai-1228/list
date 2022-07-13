const db = require("./connection_db");

module.exports = function updateOrder(orderId, message) {
  let result = {};
  return new Promise((resolve, reject) => {
    db(
      `update heroku_4342f4a0a83cd0b.order set message ="${message}" where orderId ="${orderId}";`,
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
