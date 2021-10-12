const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "public/image" });
const router = express.Router();
// const protect = require("../middleware/protect");


const { addArticle,changearticleInfo,getOnearticle, lastArticles, articleID, deleteArticle, AllArticles } = require("../controller/articleController");







router.post("/article", addArticle);
router.put("/article/:title", changearticleInfo);
router.get("/article/oneArticle/:title", getOnearticle);
router.get("/article/id/:id", articleID);
router.get("/article/new/lastArticles", lastArticles);

router.delete("/article/delete", deleteArticle);
router.get("/article/allList/:categoryID", AllArticles);











module.exports = router;