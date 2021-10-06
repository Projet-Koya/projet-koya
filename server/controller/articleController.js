const Article = require("../models/articleModel.js")
const bcrypt = require("bcrypt");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const path = require("path");




// Add new article 
const addArticle = async (req, res) => {
    // const userID = req.cookies.jwtData.id
    const { categoryID, userID, title, text, date } = req.body
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

// editing article 
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

const getOnearticle = async(req,res) =>{
    const articleTitle= req.params;
    try {
    const onlyArticle =  await Article.findOne(articleTitle);
    res.status(201).json({
        message:"Article that you are clicked",
        data: onlyArticle
    })
    } catch(err){
        return res.status(400).json({
            message:"Article that you are searching for doesnt exist"
        })
    }
}




module.exports = {
    addArticle,
    changearticleInfo,
    getOnearticle

}