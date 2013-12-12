var exec = require("child_process").exec;
var dblite = require('dblite');
var db = dblite('./Temperature.db');
var quiche = require('quiche');
function hide()
{console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");}
//=============================================================
function printDB(response)
{
    response.writeHead(200, {"Content-Type": "text/html"});
    db.on('error', function(err)
    {
	console.error(err.toString());
    });

    //--------create table, insert into table------------------	
    db.query('CREATE TABLE IF NOT EXISTS tempTable(time INTEGER, temp INTEGER)');
    db.query('BEGIN');
    db.query('DELETE FROM tempTable');
    db.query('COMMIT');
    db.query('.mode csv');
    db.query('.import tempData.csv tempTable');
 
    //--------retrieve data from table--------------------------
  var bar = new quiche('bar');
  bar.setWidth(800);
  bar.setHeight(300);
  bar.setTitle('Temperature');
  bar.setBarWidth(10);
  bar.setBarSpacing(5);
  bar.setLegendHidden();

  db.query('SELECT time, temp FROM tempTable', ['time', 'temp'],
	function(rows)
	{
	    response.write('<html><body><button onclick="/requestHandler.js/hide()">table</button>');
	    response.write('<div id="ttable"><table border="1"><tr><th>Time</th><th>Temperature</th></tr>');
	    rows.forEach(eachRow);
        }
    );
    function eachRow(row, i, rows)
    {
	bar.addData([row.temp], row.time, 'FF0000');
	response.write('<tr><td>' + row.time + 
			'</td><td>' + row.temp + '</td></tr> \n');
	if(i+1 === rows.length)
	{
	    db.close();
	    bar.setAutoScaling();
	    var imageUrl = bar.getUrl(true);
	    response.write('</table></div><img src="' + imageUrl + '"></body></html>');
	    response.end();
        }
    }			
    function sleep()
    {
        var milliseconds = 1000;
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliseconds);
    }
}

exports.printDB = printDB;