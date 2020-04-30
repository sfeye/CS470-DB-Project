var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var config = require("../config/config");
var bodyParser = require("body-parser");

const connection = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

router.get("/", function(req, res, next) {
    var employeeID = req.query.employeeID;
    var ISBN = req.query.ISBN;
    var valid = false;

    connection.getConnection(function(err, connection) {
        if (err) throw err

        var empQuery    =   "SELECT * FROM employee WHERE employeeid = " + connection.escape(employeeID) + ";"

        connection.query( empQuery, 
            function (err, results) {
                if (err) throw err
              
                if(results.length !== 0) {
                    valid = true;
                } else {
                    res.send("Invalid employee ID...");
                }
                console.log(results);
                
                if(valid) {
                    connection.query( "CALL CheckInBook(" + ISBN + ");", 
                    function (err, results) {
                        if (err) throw err

                        res.send(results);
                    });
                }
            });
    });
});
module.exports = router;