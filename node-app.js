var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/'));
server.listen(8080);
console.log('server starts on 8080');