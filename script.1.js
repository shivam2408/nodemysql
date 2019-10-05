
var mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'xxxx',
    database : 'thickness',
    port: 3307
});

// Connect


db.connect(function(err) {
    if (err) throw err;
    db.query("select * from test1_shivam where Record = (select max(Record) from test1_shivam)", function (err, result, fields) {
      if (err) throw err;
      
      console.log(result);
    });
  }); 