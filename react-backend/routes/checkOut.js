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

    connection.getConnection(function(err, connection) {
      if (err) throw err

      var empQuery      =   "SELECT firstname, lastname FROM employee WHERE employeeid = " + connection.escape(employeeID) + ";"
      var userQuery     =   "SELECT userid FROM user WHERE phone_number = " + connection.escape(phone_number) + " AND UPPER(email_address) = UPPER(" + connection.escape(email) + ");"

      connection.query( empQuery, 
      function (err, results) {
          if (err) throw err
        
          if(results.length !== 0) {
              valid = true;
          } else {
              res.send("Invalid employee ID...");
          }
          console.log(results);

          connection.query( userQuery, 
            function (err, results) {
                if (err) throw err

                if (valid === true) {
                    if (results.length !== 0) {
                        // call check out book procedure
                        connection.query("CALL CheckOutBook(" + connection.escape(ISBN) + ", " + results[0].userid + ");",
                            function (err, results) {
                                if (err) throw err

                                res.send(results[0]);
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