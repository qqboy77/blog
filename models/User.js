var db = require('./database');

var User = function(){};

User.prototype.find = function(id,callback) {
	var sql = "SELECT * FROM app_patch WHERE id = ?";

	db.pool.getConnection(function(err,connection){
		if (err) {
			callback(true,'1');
			return;
		}

		connection.query(sql,[id],function(err,results){
			if (err) {
				console.log(err);
				callback(true,'1');
				return;
			}
			console.log(results);
			callback(false,results);
		});
	});
};

User.prototype.insert = function(data,callback) {
	var sql = "INSERT INTO app_patch(id,client,type,version,patch_version) VALUES(?,?,?,?,?)";

	db.pool.getConnection(function(err,connection){
		if (err) {
			callback(true,'1');
			return;
		}

		connection.query(sql,[data.id,data.client,data.type,data.version,data.patch_version],function(err,results){
			if (err) {
				console.log(err);
				callback(true,'1');
				return;
			}
			console.log(results);
			callback(false,results);
		});
	});
};

module.exports = User;
//var sql = "INSERT INTO app_patch(id,client,type,version,patch_version) VALUES(3,'wxd','android','210',3)";