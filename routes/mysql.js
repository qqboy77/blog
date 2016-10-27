var mysql = require('mysql');
var TEST_DATABASE='test';
var TEST_TABLE = 'app_patch';

var mysql_dev ={
		host:'10.9.34.172',
		user:'pifa',
		password:'pifa',
		database:'test',
	}
var pool = mysql.createPool(mysql_dev);

var sql = "SELECT * FROM app_patch WHERE id = 1";

	pool.getConnection(function(err,connection){
		if (err) {

			return;
		}

		connection.query(sql,[1],function(err,result){
			if (err) {

				return;
			}
			console.log(result);
		});
	});

