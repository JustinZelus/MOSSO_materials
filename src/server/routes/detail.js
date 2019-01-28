var express = require("express");
var router = express.Router();
var Detail = require("../models/detail");

/* GET Single data by id. */

router.route("/:detailId/:name").get((req, res) => {
  //console.log(req.params.detailId);
  // res.send(200);
  Detail.find({ detailId: { $eq: req.params.detailId } })
    .exec()
    .then(detail => {
      //console.log(detail);
      res.json(detail);
    })
    .catch(err => {
      res.send(err);
    });
});

/* GET All data. */
router.route("/").get((req, res) => {
  Detail.find({})
    .exec()
    .then(detail => {
      res.json(detail);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
