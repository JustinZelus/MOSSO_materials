var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const detail = new Schema(
  {
    detailId: { type: Number },
    jumbotronPic: { type: String }, 
    jumbotronMotto: { type: String }, 
    pic1Url: { type: String },
    pic2Url: { type: String },
    pi31Url: { type: String },
    p1: { type: String },
    p2: { type: String },
    p3: { type: String },
    quote: { type: String },
    quote_author: { type: String },
    author_picUrl: { type: String },
    author_name: { type: String },
    author_description: { type: String }
  },
  { collection: "detail" }
);

module.exports = mongoose.model("detail", detail);
