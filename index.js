
var mysql = require('mysql');
var express = require('express');
var app= express();
var d3 = require("d3");
var index= require("http").createServer(app);
var io= require("socket.io").listen(index);


module.exports = function(io) {
    var express = require('express');
    var router = express.Router();
    var mysql = require('../mysql.js').pool;
   
    io.on('connection', function (socket) {
           socket.on('event_name', function (data) {
       mysql.getConnection(function(err,connection){
           if (err) {
             connection.release();
             return;
           }               
            connection.query("select * from test1_shivam where Record=(select max(Record) from test1_shivam)",function(err,rows){
               if(rows.length>0){//checks if there are more than 0 rows returned.....
                   socket.emit('do_something',database);
               }
               else{
                   socket.emit('do_something_else',database);
               }
               connection.release();    
            });
   
             connection.on('error', function(err) {      
               return;    
             });
       });
     });
   
   });
   
   router.get('/', function(req, res) {
   res.render("index"); 
   });
   
   return router;
   }
//var dataset = new Array(10);
//console.log(dataset);

// var routes = require('./routes/index')(io);
// var users = require('./routes/users');
// users=[]; 
// connections=[]; 
// index.listen(process.env.PORT || 3000);
// console.log('Server running.....')
// app.get('/', function(req, res){
//     res.sendfile(__dirname + '/index.html')
// })

// io.sockets.on('connection', function(socket){
//     connections.push(socket);
//     console.log('Connected: %s sockets connected', connections.length)
// });

// connections.splice(connections.indexof(socket),1);
// console.log('Disconnected: %s sockets connected', connections.length);



// date fetching method

