var express = require('express');
var flash = require('connect-flash');
var path = require('path');

module.exports = function(app, config, passport) {
  
  // configure Express
app.configure(function() {

  app.set('views', config.root + '/views');
  app.set('view engine', 'ejs');
  app.set('photos', config.root + '/public/photos');
  app.set("port", process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'keyboard cat' }));

  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(config.root, 'public')));

});

}