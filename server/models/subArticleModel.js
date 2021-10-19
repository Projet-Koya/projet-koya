const mongoose = require("mongoose");

const SubArticleSchema = new mongoose.Schema(
	{
		articleID: { type: mongoose.Types.ObjectId, ref: "Article" },
		title: String,
		text: String,
	},
	{
		timestamps: true,
	}
);

const SubArticle = mongoose.model("SubArticle", SubArticleSchema);

module.exports = SubArticle;
