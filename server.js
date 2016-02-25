var express = require('express');
var app = express();
var morgan = require('morgan');
var PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/', express.static(__dirname + '/public'));

app.get('/main_page.html', function (req, res){
	res.redirect('/index.html');
});

app.get('/developers', function (req, res){
	res.redirect('/developers.html');
});

app.get('/contact', function (req, res){
	res.redirect('/contact.html');
});

app.get('/index', function (req, res){
	res.redirect('/index.html');
});

app.listen(PORT, function(){
	console.log('Server started at port ' + PORT);
});
