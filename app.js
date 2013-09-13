var express = require('express')
  , passport = require('passport')
  , util = require('util');
  
// Load configurations
// if test env, load example file
var env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env]
  , mongoose = require('mongoose');
  
  mongoose.connect(config.db);

// Bootsrap passport
require('./config/passport')(passport, config) ;

var app = express();

// Bootstrap express
require('./config/express')(app, config, passport);

// Bootstrap routes
require('./config/routes')(app, passport);

app.listen(3000, function(){
  console.log('Server started at port ' + app.get('port'));
});

