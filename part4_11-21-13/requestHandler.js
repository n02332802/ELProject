var exec = require("child_process").exec;
var dblite = require('dblite');
var db = dblite('./Temperature.db');

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

  db.query('SELECT time, temp FROM tempTable', ['time', 'temp'],
	function(rows)
	{
	    response.write('<html><body><table border="1"><tr><th>Time</th><th>Temperature</th></tr>');
	    rows.forEach(eachRow);
        }
    );
    function eachRow(row, i, rows)
    {
	response.write('<tr><td>' + row.time + 
			'</td><td>' + row.temp + '</td></tr> \n');
	if(i+1 === rows.length)
	{
	    response.write('</table></body></html>');
	    db.close();
	    response.end();
        }
    }			
    function sleep()
    {
        var milliseconds = 5000;
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliseconds);
    }
}

exports.printDB = printDB;