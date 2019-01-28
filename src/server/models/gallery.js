var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gallery = new Schema(
  {
    galleryId: { type: Number },
    galleryFullUrl: { type: String },
    galleryThumb: { type: String },
    title: { type: String },
    description: { type: String }   
  },
  { collection: "galleries" }
);

module.exports = mongoose.model("gallery", gallery);
