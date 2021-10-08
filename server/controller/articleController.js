const Article = require("../models/articleModel.js")
const bcrypt = require("bcrypt");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const path = require("path");




// Add new article 
const addArticle = async (req, res) => {

    const userID = req.cookies.jwtData.id
    const { categoryID, title, text, date } = req.body
    console.log("test")
    try {
        await Article.create({ categoryID, userID, title, text, date });
        res.status(201).json({
            message: 'New article created',
        })
    } catch (err) {
        return res.status(400).json({
            message: 'couldnt add new article'
        })
    }
}


const changearticleInfo = async (req, res) => {
    const articleTitle = req.params.title
    const { categoryID, userID, title, text, date } = req.body;
    try {
        await Article.findOneAndUpdate(articleTitle, { categoryID, userID, title, text, date })
        res.json({
            message: "Article updated"
        })
    }
    catch (err) {
        return res.status(400).json({
            message: " Article created",
        });
    }
}


const lastArticles = async (req, res) => {

}





module.exports = {
    addArticle,
    changearticleInfo

}