var express = require('express');
var router = express.Router();

var qiniu = require("qiniu");

qiniu.conf.ACCESS_KEY = 'BBHpdBr6BDZSyBZqUmNmeSy7_0Ej42v180LwWBSr';
qiniu.conf.SECRET_KEY = '4rBlcALXRfOfhwON50TI6C-0swhHGO8VW3V_EXLW';

bucket = 'didisos';

key = 'stop1.png';

// key = '431.jpg';
function uptoken(bucket,key) {
	var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
	return putPolicy.token();
}

 



function uploadFile(uptoken,key,localFile){
	var extra = new qiniu.io.PutExtra();
	qiniu.io.put(uptoken,key,localFile,extra,function(err,ret){
		if (!err) {
			console.log(ret.hash,ret.key,ret.persistentId);
		} else {
			console.log(err);
		}
	});
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.all('/data',function(req,res,next){
	key = req.body.lastname;
	token = uptoken(bucket,req.body.lastname);
	console.log(token);
	uploadFile(token,key,req.body.data);

    res.send(req.body.firstname +'  ' + req.body.name);
});



router.get('/:username',function(req,res,next){

    res.send('username:'+'-' + req.params.username);
});


module.exports = router;
