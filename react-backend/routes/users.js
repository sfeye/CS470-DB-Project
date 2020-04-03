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
  
  connection.getConnection(function(err, connection) {
    if (err) throw err
    var empQuery     =    "SELECT firstname, lastname FROM employee WHERE employeeid = " + connection.escape(employeeid) + ";"
    var userQuery    =    "SELECT userid FROM user WHERE phone_number = " + connection.escape(phone_number) + " AND UPPER(email_address) = UPPER(" + connection.escape(email) + ");"

    connection.query(empQuery, 
        function (err, results) {
            if (err) throw err
            if(results.length !== 0) {
              valid = true;
            } else{
              res.send("Invalid eployee ID...")
              return;
            }
            console.log(results);

            connection.query(userQuery,
              function (err, results) {
                if (err) throw err

                if (valid === true && results.length !== 0) {
                  connection.query("CALL GetUserCheckedOutBooks(" + results[0].userid + ");", 
                  function (err, results) {
                    if (err) throw err
          
                    res.send(results);
                    return;
                  });
                } else {
                  res.send("User not found...");
                }
        });
    });
  });
});

module.exports = router;
