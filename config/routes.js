var routes = require('../routes');
var photos = require('../routes/photo');


module.exports = function(app, passport) {
	app.get('/', routes.index);

	app.get('/account', routes.ensureAuthenticated, routes.account);

	app.get('/login', routes.login);
	app.post('/login', 
	  passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
	  routes.auth
	);

	app.get('/signup', routes.signup);
	app.post('/signup', routes.signuser);
	  
	app.get('/logout', routes.logout);

	app.get('/upload', routes.ensureAuthenticated, photos.form);
	app.post('/upload', routes.ensureAuthenticated, photos.submit(app.get('photos')));

    app.delete('/delete/:id', routes.ensureAuthenticated, function(req, res){
    	console.log(id);
    });
}