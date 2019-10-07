'use strict';

var express = require('express');
var app = express();

var getRouter = require('./src/routes/getRoutes'); 


var port = process.env.PORT || 4000;

app.use(express.static('./public'));
app.use(express.static('./src'));

app.set('views', './src/views');      
app.set('view engine', 'ejs');


app.use('/get', getRouter.getget());

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Population Chart'
    });
});

app.listen(port, function () {
    console.log('running server on port ' + port) 
});
