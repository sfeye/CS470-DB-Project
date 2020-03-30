var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var config = require("../config");
var bodyParser = require("body-parser");

const connection = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

/* GET users listing. */
router.get("/", function(req, res, next) {
  var ISBN = req.query.ISBN;
  var author = req.query.author;
  var title = req.query.bookname;
  connection.getConnection(function(err, connection) {
    if (err) throw err

    if (ISBN !== "undefined") {
        connection.query("SELECT isbn, bookname, author, shelf_number, checkout_indicator from book WHERE ISBN = '" + ISBN + "';", 
        function (err, results) {
          if (err) throw err
          res.send(results)
          return;
      });
    } else {
      connection.query("SELECT isbn, bookname, author, shelf_number, checkout_indicator from book WHERE bookname = '" + title + 
      "' AND author = '" + author + "';", 
      function (err, results) {
        if (err) throw err
        res.send(results)
        console.log(title)
        return;
      });
    }
  });
});

module.exports = router;
