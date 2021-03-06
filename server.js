var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// set our port
var port = process.env.PORT || 4500;

mongoose.connect('mongodb+srv://daniel:web-miniproject@web-miniproject-csnyv.mongodb.net/emberData?retryWrites=true');

app.use(function(req, res, next) {
    // Comment the next line for running a local version
    res.setHeader('Access-Control-Allow-Origin', 'https://web-miniproject-client.herokuapp.com');
    // Uncomment the next line for running a local version
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("default-src", 'none');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());       // to support JSON-encoded bodies

var router = express.Router();
app.use('/', router);
require('./app/routes')(router);


app.listen(port);

exports = module.exports = app;