const UserList = require("../models/userList_model");
const Orders = require("../models/order_model");
const addOrder = require("../models/creatOrder");
const orderUpdate = require("../models/updateOrder");
const userUpdate = require("../models/updateUser");
module.exports = class Member {
  getUserList(req, res, next) {
    UserList().then(
      (result) => {
        res.json({
          status: "success",
          result: result,
        });
      },
      (err) => {
        res.json({
          result: err,
        });
      }
    );
  }
  getOrders(req, res, next) {
    Orders().then(
      (result) => {
        res.json({
          status: "success",
          result: result,
        });
      },
      (err) => {
        res.json({
          result: err,
        });
      }
    );
  }

  postCreatOrder(req, res, next) {
    addOrder(req.body.message).then(
      (result) => {
        res.json({
          status: "success",
        });
      },
      (err) => {
        res.json({
          result: err,
        });
      }
    );
  }

  postUserUpdate(req, res, next) {
    userUpdate(req.body.orderId, req.body.userId).then(
      (result) => {
        res.json({
          status: "success",
        });
      },
      (err) => {
        res.json({
          result: err,
        });
      }
    );
  }

  postOrderUpdate(req, res, next) {
    orderUpdate(req.body.orderId, req.body.message).then(
      (result) => {
        res.json({
          status: "success",
        });
      },
      (err) => {
        res.json({
          result: err,
        });
      }
    );
  }
};
