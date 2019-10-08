var cors = require('cors'),
    express = require('express'),
    getRouter = express.Router(),        
    mysql = require('mysql');


var connection = mysql.createConnection({
    connectionLimit : 1,
    host     : 'localhost',
    user     : 'root',
    password : 'xxxx',
    database : 'thickness',
    port: 3307
});



var getget = function(){
    
    getRouter.route('/')    
    .get(function(req,res){
        connection.query('select * from test1_shivam where Record=(select max(Record) from test1_shivam)', req.params.id, function(err, rows, fields) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.send({
                    result: 'error',
                    err: err.code
                });
            }
            var dataset = new Array(10);
            dataset = Object.values(rows[0])   
            res.send(dataset);
            
        }); 
    });
    
    return getRouter;
        
};

module.exports = {
  getget: getget
};
 