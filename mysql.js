var mysql = require("mysql");
var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'xxxx',
    database : 'thickness',
    port: 3307
});

exports.pool = pool;