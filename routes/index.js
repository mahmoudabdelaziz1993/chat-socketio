var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/chat', function(req, res, next) {
  
  res.io.on('connection',function(socket){
  	console.log('user connected');
  	socket.on('chat message', function(msg){
    res.io.emit('chat message', msg);
    });
  	socket.on('disconnect', function(){
    console.log('user disconnected');
    });
  });
  res.render('chat', { title: 'chatmm' });
});
module.exports = router;
