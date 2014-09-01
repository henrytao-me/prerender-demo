var url = require('url');

module.exports = {

  // init: function() {
  // },

  beforePhantomRequest: function(req, res, next) {
    req.prerender.url = url.resolve('http://local.mysquar.com:1144', req.prerender.url);
    next();
  },

  // afterPhantomRequest: function(req, res, next) {
  //   next();
  // }

};
