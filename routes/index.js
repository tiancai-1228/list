var express = require("express");
var router = express.Router();

const MemberModifyMethod = require("../controllers/modify_controller");

memberModifyMethod = new MemberModifyMethod();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("user info is " + req + res);
});

module.exports = router;
