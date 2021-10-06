const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "public/image" });
const router = express.Router();
const protect = require("../middleware/protect");
const { addArticle } = require("../controller/articleController");




router.post("/article", protect, addArticle)










module.exports = router;