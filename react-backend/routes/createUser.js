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
    var firstname = req.query.firstname;
    var lastname = req.query.lastname;
    var phone_number = req.query.phone_number;
    var email = req.query.email_address;

    connection.getConnection(function(err, connection) {
      if (err) throw err

      connection.query("INSERT INTO user (firstname, lastname, phone_number, email_address)" +
      " VALUES ('" + firstname + "','" + lastname + "','" +  phone_number + "','" + email + "');", 
      function (err, results) {
          if (err) throw err

          res.send("User created successfully!")
        });
    });
});
module.exports = router;