var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
  development: {
    db: 'mongodb://localhost/photo_app',
    root: rootPath,    
    app: {
      name: 'Nodejs Express Mongoose Demo'
    },
  }
}