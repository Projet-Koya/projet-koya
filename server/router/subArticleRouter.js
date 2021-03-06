const express = require("express");
const multer = require("multer");
const router = express.Router();
//const protect = require("../middleware/protect");

const { addSubArticle, getSubArticle, deleteSubArticle, modifyASubArticle, subArticleTitles } = require("../controller/subArticleController");




router.post("/subArticle", addSubArticle);
router.get("/subArticle/:title", getSubArticle);
router.delete("/subArticle/:title", deleteSubArticle);
router.put("/subArticle/:id", modifyASubArticle);
router.get("/subArticle/singleOne/titles", subArticleTitles);










module.exports = router;