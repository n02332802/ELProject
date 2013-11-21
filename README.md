ELProject
=========

RPi project - Create a responsive website with temperature data using Node.js, a database, and Angular.js
0. Set up RPi with 8GB memory card. Installed Raspbian.
1. Installed and set up Node.js following this tutorial:
	http://blog.rueedlinger.ch/2013/03/raspberry-pi-and-nodejs-basic-setup/
	Then went through a node.js tutorial: http://www.nodebeginner.org/
2. Built and installed MongoDB. It took ~9 hours total!
	http://mongopi.wordpress.com/2012/11/25/installation/
	Created a database to test MongoDB. Had to make sure to run 'mongod' in the background.
2a. Installed mongoose to connect  MongoDB to Node.js.
	http://mongoosejs.com/docs/index.html
	http://mongoosejs.com/docs/guide.html
	http://mongoosejs.com/docs/models.html
	http://theholmesoffice.com/mongoose-and-node-js-tutorial/
2b. Expanded my server program to create a database with 1 entry to test.
	Currently having problems. The module can not be found. I might have installed in the wrong directory.
	Maybe I can just change the path in my code. Maybe I'll just pick another database. 
3. Installed SQLite 
   Installed DBLITE with 'npm install dblite' in the project's directory.
   https://github.com/WebReflection/dblite/
4. Used zetcode.com/db/sqlite/ documentation to create a database from a .csv file.
   Had to delete the title line.
5. Used 'npm install node-highcharts' to install the node module for highcharts.
   Used https://npmjs.org/package/node-highcharts to start.
   Currently using http://www.highcharts.com/docs/working-with-data/preprocessing-live-data to figure out how to graph live data.
   