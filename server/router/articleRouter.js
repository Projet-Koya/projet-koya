const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "public/image" });
const router = express.Router();
// const protect = require("../middleware/protect");
const { addArticle,changearticleInfo,getOnearticle, lastArticles } = require("../controller/articleController");




router.post("/article", addArticle);
router.put("/article/:title", changearticleInfo);
router.get("/article/:title", getOnearticle);
router.get("/article/new/lastArticles", lastArticles);









module.exports = router;