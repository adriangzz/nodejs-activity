var express = require("express");
var router = express.Router();
var db = require("./script");
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get("/", function (req, res, next) {
  var sql = "SELECT * FROM category";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render("categories", { title: "User List", userData: data });
  });
});
module.exports = router;
