var express = require('express');
var router = express.Router();
var User = require('../models/User');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',h1title:'我的博客' });
});

router.get('/hello', function(req, res, next) {
  res.send('hello');
});

router.get('/reg', function(req, res, next) {
  res.render('reg',{});
});

router.post('/reg', function(req, res, next) {
	// res.send(req.body);
	if (req.body['password-repeat'] != req.body['password']) {
		
	}
});

router.get('/login', function(req, res, next) {
  res.send('login');
});

router.post('/login', function(req, res, next) {
  res.send('hello');
});

router.get('/logout', function(req, res, next) {
  res.send('hello');
});

router.all('/sql/:userid',function(req,res,next){
  var userid = req.params.userid;
  var user = new User();
  user.find(userid,function(err,results){
    if (err) {
      res.send(err);
    }
    res.send(results);
  });
});

router.all('/sqlinsert',function(req,res,next){
  var insertdata = {id:4,
    client:'crasher',
    type:'ios',
    version:'1.0.1',
    patch_version:1};
    
  var user = new User();
  user.insert(insertdata,function(err,results){
    if (err) {
      res.send(err);
    }
    res.send(results);
  });
});
module.exports = router;
