const SubArticle = require("../models/subArticleModel.js");
// const bcrypt = require("bcrypt");
// const fs = require("fs");
// const jwt = require("jsonwebtoken");
// const path = require("path");

// POST a subarticle

const addSubArticle = async (req, res) => {
    const { articleID, title, text } = req.body
    try {
        // const data = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
        // req.cookies.jwtData = data;

        await SubArticle.create({ articleID: articleID, title: title, text: text });
        res.status(201).json({
            message: 'New subArticle created',
        })
    } catch (err) {
        return res.status(400).json({
            message: 'couldnt add new subArticle',
        })
    }
}

// take one article
const getSubArticle = async (req, res) => {
    const getArticle = req.params;
    try {
        const findArticle = await SubArticle.findOne(getArticle);
        res.status(201).json({
            message: "you get your article",
            data: findArticle
        })
    } catch (err) {
        return res.status(400).json({
            message: "you can't get article"
        })

    }
}

// Delete an subarticle
const deleteSubArticle = async (req, res) => {
    const deleteArticle = req.params;

    try {
        const deleteOneAticle = await SubArticle.deleteOne(deleteArticle);
        res.status(201).json({
            message: "you delete subarticle !",
        })
    } catch (err) {
        res.status(400).json({
            message: "you couldn't delete subarticle",
        })
    }
}

//Edite an subarticle
const modifyASubArticle = async (req, res) => {
    const modifyArticle = req.params.
        id;
    const { articleID, title, text } = req.body
    try {
        await SubArticle.findOneAndUpdate(modifyArticle, { articleID, title, text });
        res.status(201).json({
            message: "you modify subarticle !!",
        })
    } catch (err) {
        return res.status(400).json({
            message: "you can't modify subarticle",
        });
    }
}




module.exports = {
    addSubArticle,
    getSubArticle,
    deleteSubArticle,
    modifyASubArticle,
};
