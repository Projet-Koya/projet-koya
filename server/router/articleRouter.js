const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "public/image" });
const router = express.Router();
//const protect = require("../middleware/protect");


const { addArticle, changeArticleInfo, getOneArticle, lastArticles, articleID, deleteArticle, AllArticles, OneCategoryArticle } = require("../controller/articleController");




router.post("/article", addArticle);
router.put("/article/:title", changeArticleInfo);
router.get("/article/oneArticle/:title", getOneArticle);
router.get("/article/id/:id", articleID);
router.get("/article/new/lastArticles", lastArticles);
router.delete("/article/delete", deleteArticle);
router.get("/article/allList", AllArticles);
router.get("/article/categoryArticle/:categoryID", OneCategoryArticle)




module.exports = router;