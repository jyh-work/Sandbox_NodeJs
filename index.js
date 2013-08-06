var server = require("./nodeServer/server.js");
var router = require("./nodeServer/router.js");

server.start(router.route);