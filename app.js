var path = require('path');
var prerender = require('prerender');

var server = prerender({
  //number of phantomjs processes to start
  workers: 4,

  //number of requests to server before restarting phantomjs
  iterations: 200,

  //arguments passed into each phantomjs process
  phantomArguments: [
    "--load-images=false",
    "--ignore-ssl-errors=true"
  ]
});

server.use(prerender.blacklist());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
server.use(require(path.resolve(__dirname, 'plugnplay.js')));

server.start();