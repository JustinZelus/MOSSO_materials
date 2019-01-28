var express = require("express");
var router = express.Router();
var async = require("async");
var Section = require("../models/section");
var Gallery = require("../models/gallery");
var Service = require("../models/service");

var allDbRequest = [];
allDbRequest.push(Section.find({}));
allDbRequest.push(Gallery.find({}));
allDbRequest.push(Service.find({}));

/* GET All(Section,Gallery,Service) data. */
router.route("/").get((req, res) => {
  Promise.all(allDbRequest)
    .then(results => {
      // console.log(results);
      //res.status(200).send(results);
      res.json(results);
    })
    .catch(err => {
      res.send(err);
    });
});




module.exports = router;
