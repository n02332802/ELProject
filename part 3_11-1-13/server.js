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
        var Temperature = mongoose.model('Temperature', tempSchema)
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



