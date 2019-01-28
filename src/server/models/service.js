var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const service = new Schema(
  {
    serviceId: { type: Number },
    serviceIcon: { type: String },
    title: { type: String },
    description: { type: String }   
  },
  { collection: "service" }
);

module.exports = mongoose.model("service", service);
