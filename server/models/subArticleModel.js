const mongoose = require("mongoose");





const subArticleSchema = new mongoose.Schema({
    articleID: { type: mongoose.Types.ObjectId, ref: "Article" },
    title: String,
    text: String,
    image: String,
},
    {
        timestamps: true,
    }

);



const SubArticle = mongoose.model("SubArticle", subArticleSchema);





module.exports = SubArticle;