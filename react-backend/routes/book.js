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

    var isbnQuery     =   "SELECT isbn, bookname, author, shelf_number, checkout_indicator from book WHERE ISBN = " + connection.escape(ISBN) + ";";
    var authorQuery   =   "SELECT isbn, bookname, author, shelf_number, checkout_indicator from book WHERE UPPER(author) LIKE UPPER(" + connection.escape('%' + author + '%') + ");";
    var titleQuery    =   "SELECT isbn, bookname, author, shelf_number, checkout_indicator from book WHERE UPPER(bookname) LIKE UPPER(" + connection.escape('%' + title + '%') + ");";
    var bothQuery     =   "SELECT isbn, bookname, author, shelf_number, checkout_indicator from book WHERE UPPER(bookname) LIKE UPPER(" + connection.escape('%' + title + '%') + ") AND UPPER(author) LIKE UPPER(" + connection.escape('%' + author + '%') + ");"

    if (ISBN !== "undefined") {
        connection.query( isbnQuery, 
        function (err, results) {
          if (err) throw err
          res.send(results)
          return;
      });
    } else if(author !== "undefined" && title === "undefined"){
      connection.query( authorQuery,
      function (err, results) {
        if (err) throw err
        res.send(results)
        return;
      });
    } else if(author === "undefined" && title !== "undefined"){
        connection.query(titleQuery,
        function (err, results) {
          if (err) throw err
          res.send(results)
          return;
        });
    } else {
      connection.query( bothQuery, 
        function (err, results) {
          if (err) throw err
          res.send(results)
          return;
        });
    }
  });
});

module.exports = router;
