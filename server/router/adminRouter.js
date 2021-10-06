const express = require("express");
const adminContoller = require("../controller/adminController");
const router = express.Router();
// const protect  = require("../middleware/protect")
const { addUser, deleteUser, addlogin, changeUserInfo, userLogout } = require("../controller/adminController");

router.post("/user", addUser)
router.delete("/user/:id", deleteUser)
router.post("/user/login", addlogin)
router.put("/user/change/:email", changeUserInfo)
router.get("/user/logout", userLogout)



module.exports = router;