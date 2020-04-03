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
    var email = req.query.email_address;
    var phone_number = req.query.phone_number;
    var ISBN = req.query.ISBN;
    var valid = false;
    var userID = [];

    connection.getConnection(function(err, connection) {
      if (err) throw err

      connection.query("SELECT firstname, lastname FROM employee WHERE employeeid = '" + employeeID + "';", 
      function (err, results) {
          if (err) throw err
        
          if(results.length !== 0) {
              valid = true;
          } else {
              res.send("Invalid employee ID...");
          }
          console.log(results);

          connection.query("SELECT userid FROM user WHERE phone_number = '" + phone_number + "' AND UPPER(email_address) = UPPER('" + email + "');", 
            function (err, results) {
                if (err) throw err

                userID = results;
                console.log(userID);
                console.log(ISBN);
                console.log(valid);
                console.log(results.length);
                if (valid === true) {
                    if (userID.length !== 0) {
                        // call check out book procedure
                        connection.query("CALL CheckOutBook(" + ISBN + ", " + userID + ");",
                            function (err, results) {
                                if (err) throw err

                                res.send(results);
                            });
                        } else {
                            res.send("User not found");
                        }
                    }
            });
        });
    });
});
module.exports = router;