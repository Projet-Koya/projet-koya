const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "public/image" });
const router = express.Router();
const protect = require("../middleware/protect");
const { addArticle, changearticleInfo } = require("../controller/articleController");




router.post("/article", protect, addArticle);
router.post("/article/:title", protect, changearticleInfo);










module.exports = router;