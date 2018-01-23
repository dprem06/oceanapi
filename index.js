var express = require('express');
var mysql = require('mysql');
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb"
});


app.get('/', function (req, res) {
    con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM firsttable where Name='prem'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send('Data:'+JSON.stringify(result));
  });
});
});


var portNum = 4000;
app.listen(4000, function () {
    console.log('Making some pancakes on port:', portNum);
});