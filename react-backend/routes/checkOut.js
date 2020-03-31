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

router.get("/", function(req, res, next) {
    var employeeID = req.query.employeeID;
    var email = req.query.email;
    var phone_number = req.query.phonenumber;
    var ISBN = req.query.ISBN;
    var valid = false;
    var userID;

    connection.getConnection(function(err, connection) {
      if (err) throw err

      connection.query("SELECT employeeid FROM employee WHERE employeeid = '" + employeeid + "';", 
      function (err, results) {
          if (err) throw err

          valid = true;
          console.log(valid);
        });

        connection.query("SELECT userid FROM user WHERE phone_number = '" + phone_number + "' AND email_address = '" + email + "';", 
        function (err, results) {
            if (err) throw err

            userID = results;
            console.log(userID);
        });

        if (valid === true) {
            if (userID !== []) {
                // call check out book procedure
            } else {
                res.send("User not found");
            }
        }
    });
});