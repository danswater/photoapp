var Photo = require('../models/Photo');
var path = require('path');
var fs = require('fs');
var join = path.join;

exports.form = function(req, res){
  res.render('upload', { title: 'PhotoMatch' });
};

exports.submit = function(dir) {
	return function(req, res, next){
		var id  = req.user[0]._id;
		var img = req.files.photo.image;
		var name = req.body.photo.name || image.name;
		var path = join(dir, img.name);

		fs.rename(img.path, path, function(err) {
			if(err) return next(err);

            var photo = new Photo();
			photo.saveImage({
				uid: id,
				name: name,
				path: img.name
			}, function(err, status) {
				if(err) return next(err);
				res.redirect('/');
			});
		});
	}
}