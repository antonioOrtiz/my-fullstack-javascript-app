const config = require('./config').config;

var express = require('express');
var app = express();
var path = require('path');
var volleyball = require('volleyball');
var bodyParser = require('body-parser');

var routes = require('./routes/index');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);


app.use(volleyball);

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.listen(config.port, function() {
  console.info('Express listening on port', config.port);
});

