const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "public/image" });
const router = express.Router();
// const protect = require("../middleware/protect");

const { addArticle, changeArticleInfo, getOneArticle, lastArticles, articleID } = require("../controller/articleController");





router.post("/article", addArticle);
router.put("/article/:title", changeArticleInfo);
router.get("/article/oneArticle/:title", getOneArticle);
router.get("/article/id/:id", articleID);
router.get("/article/new/lastArticles", lastArticles);











module.exports = router;