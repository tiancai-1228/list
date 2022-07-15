const UserList = require("../models/userList_model");
const Orders = require("../models/order_model");
const addOrder = require("../models/creatOrder_model");
const orderUpdate = require("../models/updateOrder_model");
const userUpdate = require("../models/updateUser_model");
const checkOrderId = require("../models/checkOrderId");
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
    Orders(req.body.orderId).then(
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
          result: result.insertId,
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
    checkOrderId(req.body.orderId).then((result) => {
      if (result.length == req.body.orderId.split(",").length) {
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
      } else {
        res.json({
          status: "error",
          message: "orderId error",
        });
      }
    });
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
