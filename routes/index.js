var Photo = require('../models/Photo');
var User  = require('../models/User');
var title = 'Photo App'

exports.index = function(req, res){
  
  if(typeof req.user != "undefined"){	
    var photo = new Photo();
    photo.fetchUsersImage(req.user[0].id, function(err, data){
      console.log(data);
      res.render('./index', { title: title, photos: data, user: req.user[0] });
    });
  } else {
  	res.render('./index', { title: title, user: req.user });
  }
};

exports.account = function(req, res){
  res.render('account', { title: title, user: req.user });
};

exports.login = function(req, res){
  res.render('login', { title: title, user: req.user, message: req.flash('error') });
};

exports.auth = function(req, res) {
    res.redirect('/');
}; 

exports.logout = function(req, res){
  req.logout();
  res.redirect('/');
};

exports.signup = function(req, res){
  res.render('signup', { title: title });  
}

exports.signuser = function(req, res){
   var user  = new User();
   user.create({
       username: req.body.username,
       password: req.body.password
   }, function(err, result){
      if(err) return next(err);
        res.redirect('/');
   });
}

exports.ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
};