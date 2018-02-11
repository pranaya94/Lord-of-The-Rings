require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port', 3000);

//set static directory before defining routes
app.use(express.static(path.join(__dirname,'public/src'))); //define static folder

// app.use('/fonts', express.static(__dirname + '/fonts'));

//index.html is served on port 3000
app.use('/node_modules',express.static(path.join(__dirname,'/node_modules')));

//enable parsing of posted forms
app.use(bodyParser.urlencoded({extended : false})); //means need only strings and arrays and no warning
app.use(bodyParser.json());

//to enable cross-domain requests
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api',routes);

var server = app.listen(app.get('port'), function(){
	var port = server.address().port;
	console.log("Listening on port " + port);	
});

