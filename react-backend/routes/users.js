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
  var phone_number = req.query.phone_number;
  var email = req.query.email_address;
  var valid = false;
  var userID = [];
  connection.getConnection(function(err, connection) {
    if (err) throw err

    connection.query("SELECT firstname, lastname FROM employee WHERE employeeid = '" + employeeid + "';", 
        function (err, results) {
            if (err) throw err
            if(results.length !== 0) {
              valid = true;
            }
            console.log(results);

            connection.query("SELECT userid FROM user WHERE phone_number = '" + phone_number + 
            "' AND UPPER(email_address) = UPPER('" + email + "');", 
              function (err, results) {
                if (err) throw err
                userID = results;

                if (valid === true && userID.length !== 0) {
                  connection.query("SELECT isbn, bookname, author, checkout_date, checkin_date FROM book_history WHERE checkout_userid = '" + userID + "';", 
                  function (err, results) {
                    if (err) throw err
          
                    res.send(results);
                    console.log(results);
                    return;
                  });
                }
        });
    });
  });
});

module.exports = router;
