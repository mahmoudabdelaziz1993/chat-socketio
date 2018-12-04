var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.io.on('connection', function(socket){
      console.log('a user connected');
      socket.on('disconnect', function(){
      console.log('user disconnected');
      });
    });

  res.render('index',{title:"index"});

});

module.exports = router;
