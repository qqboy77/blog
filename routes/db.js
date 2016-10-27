var setting = require('../setting');
var Sb = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;

mongodb.exports = new Db(setting.db,new Server(setting.host,Connection.DEFAULT_PORT,{}));