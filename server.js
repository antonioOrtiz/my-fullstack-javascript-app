const config = require('./config').config;

var express = require('express');
var app = express();
var path = require('path');
var volleyball = require('volleyball');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var contestsRouter = require('./routes/api/contests');
var namesRouter = require('./routes/api/names');

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(volleyball);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api/contests', contestsRouter);
app.use('/api/names', namesRouter);

app.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port, config.host);
});
