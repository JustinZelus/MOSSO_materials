var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const section = new Schema({
    sectionId: { type: Number},
    title: { type: String},
    description: { type: String},
    imgUrl: {type: String},
    direction : {type: String}
},{collection: 'section'});

module.exports = mongoose.model('section',section)