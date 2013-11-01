ELProject
=========

RPi project
1. Installed and set up Node.js following this tutorial:
	http://blog.rueedlinger.ch/2013/03/raspberry-pi-and-nodejs-basic-setup/
	Ran a simple program to test Node.js.
2. Built and installed MongoDB. It took ~9 hours total.
	http://mongopi.wordpress.com/2012/11/25/installation/
	Created a database to test MongoDB. Had to make sure to run 'mongod' in the background.
3. Installed mongoose to connect  MongoDB to Node.js.
	http://mongoosejs.com/docs/index.html
	http://mongoosejs.com/docs/guide.html
	http://mongoosejs.com/docs/models.html
	http://theholmesoffice.com/mongoose-and-node-js-tutorial/
4. Expanded my server program to create a database with 1 entry to test.
	Currently having problems. The module can not be found. I might have installed in the wrong directory.
	Maybe I can just change the path in my code. Maybe I'll just pick another database. 
	
current server.js code:
		var http = require('http');
		var mongoose = require('mongoose');

		function mdb()
		{
			mongoose.connect('mongodb://localhost/test');
			var db = mongoose.connection;
			db.on('error', console.error.bind(console, 'connection error:'));
			db.once('open', function callback()
			{
				var tempSchema = mongoose.Schema
				({
				time: Number,
				temp: Number
				})
				var Temperature = mongoos.model('Temperature', tempSchema)
			var newTemp = new Temperature({time: 2, temp: 5});
			console.log(newTemp.time + ' ' + newTemp.temp);
			});
		}
		function start()
		{
			function onRequest(request, response)
			{
			console.log("Request recieved");
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write("hello!! works!");
			response.end();
			}
			http.createServer(onRequest).listen(8888); 			
			console.log("Server started.");
		}
		exports.start = start;
		exports.mdb = mdb;

		
current index.js code:
		var server = require("./server");
		server.start();
		server.mdb();

		
node.sh:
		#!/bin/bash

		NODE=/opt/node/bin/node
		SERVER_JS_FILE=/home/pi/app/server.js
		USER=pi
		OUT=/home/pi/nodejs.log

		case "$1" in

		start)
		1	echo "starting node: $NODE $SERVER_JS_FILE"
			sudo -u $USER $NODE $SERVER_JS_FILE > $OUT 2>$OUT &
			;;
		stop)
			killall $NONE
			;;

		*)
			echo "usage: $0 (start|stop)"
		esac

		exit 0
