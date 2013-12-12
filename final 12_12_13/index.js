var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var handle = {};
handle["/db"] = requestHandler.printDB;

server.start(router.route, handle);
