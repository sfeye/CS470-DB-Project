var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var config = require("../config");
var bodyParser = require("body-parser");

const connection = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.port
});

/* GET users listing. */
router.get("/", function(req, res, next) {
  connection.getConnection(function(err, connection) {
    if (err) throw err

    connection.query('SELECT * from book', function (err, results) {
      if (err) throw err
    
      res.send(results)
      connection.release();
      return;
    });
  });
});

module.exports = router;
