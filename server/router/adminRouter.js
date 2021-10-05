const express = require("express");
const adminContoller = require("../controller/adminController");
const router = express.Router();
const { protect } = require("../middleware/protect")
const { addUser, deleteUser, addlogin, changeUserInfo } = require("../controller/adminController");

router.post("/user",addUser)
router.delete("/user/:id", deleteUser)
router.post("/user/login", addlogin)
router.put("/user/:name/:lastName/:email/:password/:isAdmin", changeUserInfo)



module.exports = router;