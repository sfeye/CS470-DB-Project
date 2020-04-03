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
    } else if(author !== "undefined" && title === "undefined"){
      connection.query("SELECT isbn, bookname, author, shelf_number, checkout_indicator from book WHERE UPPER(author) LIKE UPPER('%" + author + "%');", 
      function (err, results) {
        if (err) throw err
        res.send(results)
        console.log(title)
        return;
      });
    } else if(author === "undefined" && title !== "undefined"){
        connection.query("SELECT isbn, bookname, author, shelf_number, checkout_indicator from book WHERE UPPER(bookname) LIKE UPPER('%" + title + "%');", 
        function (err, results) {
          if (err) throw err
          res.send(results)
          console.log(title)
          return;
        });
    } else {
      connection.query("SELECT isbn, bookname, author, shelf_number, checkout_indicator from book WHERE UPPER(bookname) LIKE UPPER('%" + title + 
      "%') AND UPPER(author) LIKE UPPER('%" + author + "%');", 
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
