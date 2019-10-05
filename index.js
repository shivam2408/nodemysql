
var mysql = require('mysql');
var express = require('express');
var app= express();
var d3 = require("d3");
var index = require("http").createServer(app);
var io= require("socket.io").listen(index);

//var dataset = new Array(10);
//console.log(dataset);


users=[]; 
connections=[]; 
index.listen(process.env.PORT || 3000);
console.log('Server running.....')
app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html')
})

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length)
});

connections.splice(connections.indexof(socket),1);
console.log('Disconnected: %s sockets connected', connections.length);



// date fetching method

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
 