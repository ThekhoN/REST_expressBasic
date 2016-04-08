var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log('listening on port 3000');
});

app.get('/', function(req, res){
	res.sendFile('/Users/thekho.ngaosathe/Desktop/REST_express_base' + '/index.html');	
});

app.post('/quotes', function(req, res){
	res.sendFile('/Users/thekho.ngaosathe/Desktop/REST_express_base' + '/post.html');	
});