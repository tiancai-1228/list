var express = require("express");
var router = express.Router();

const MemberModifyMethod = require("../controllers/modify_controller");

memberModifyMethod = new MemberModifyMethod();

router.get("/userlist", memberModifyMethod.getUserList);
router.get("/orders", memberModifyMethod.getOrders);

router.post("/creatOrder", memberModifyMethod.postCreatOrder);

router.post("/userUpdate", memberModifyMethod.postUserUpdate);
router.post("/orderUpdate", memberModifyMethod.postOrderUpdate);
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("hollow word");
});

module.exports = router;
