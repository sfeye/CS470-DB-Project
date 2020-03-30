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
  var employeeid = req.query.employeeID;
  var phone_number = req.query.phonenumber;
  var email = req.query.email;
  var valid = false;
  var userID;
  connection.getConnection(function(err, connection) {
    if (err) throw err

    connection.query("SELECT employeeid FROM employee WHERE employeeid = '" + employeeid + "';", 
        function (err, results) {
            if (err) throw err

            valid = true;
    });

    connection.query("SELECT userid FROM user WHERE phone_number = '" + phone_number + "' AND email = '" + email + "';", 
        function (err, results) {
            if (err) throw err

            userID = results;
    });

    if (valid === true && userID !== undefined) {
        connection.query("SELECT isbn, bookname, author, checkout_date, checkin_date FROM book_history WHERE checkout_userid = '" + userID + "';", 
        function (err, results) {
          if (err) throw err
          res.send(results)
          return;
      });
    }
  });
});

module.exports = router;
