var express = require("express");
var router = express.Router();
var async = require("async");
var Section = require("../models/section");
var Gallery = require("../models/gallery");

/**因進入首頁時，需要將好幾個table的資料select出來。
 * 整理了幾種寫法。
 */

/** I.Normal
 *
 * single table
 *
 * */
router.route("/").get((req, res) => {
  Section.find({}, (err, sections) => {
    if (err) {
      res.send(err);
    }
    res.json(sections);
  });
});

/** II.Promise
 *
 * single table
 *
 * */
router.route("/").get((req, res) => {
  Section.find({})
    .exec()
    .then(sections => {
      res.json(sections);
    })
    .catch(err => {
      res.send(err);
    });
});

/** III.Async Parallel
 *
 * Multiple table
 *
 * */
var alldata = {};
var findData = callback => {
  async.parallel(
    {
      A: function(cb) {
        Section.find({}, (err, sections) => {
          cb(null, sections);
        });
      },
      B: function(cb) {
        Gallery.find({}, (err, galleries) => {
          cb(null, galleries);
        });
      }
    },
    (err, results) => {
      if (err) console.log(err);
      //callback(results);
      alldata = results;
    }
  );
};

/** IV.Promise All
 *
 * Multiple table
 *
 * */
router.route("/").get((req, res) => {
  Promise.all(allDbRequest)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.send(err);
    });
});
