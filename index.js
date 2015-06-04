var express = require('express'),
	path = require('path'),
	app = express(),
	oneDay = 3600*1000*24;

app.set('views', 'html');
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, './'), {"maxAge":  oneDay}));

app.get('/', function(req, res) {
	res.render('index');
});

app.set('port', 6060);

app.listen(app.get('port'), function() {
	console.log('app listening on port: ', app.get('port'));
});