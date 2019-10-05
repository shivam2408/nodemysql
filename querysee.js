var mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'xxxx',
    database : 'thickness',
    port: 3307
});


db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");  
    db.query("select * from test1_shivam where Record=(select max(Record) from test1_shivam)", function (err, result, fields) {
      if (err) throw err;
      // console.log(result);
      var dataset = Object.values(result[0])
      console.log(dataset);

    });
  }); 
 