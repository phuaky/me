var express = require('express');
var favicon = require('serve-favicon');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));

// set routes
var main = require('./routes/main');
var games = require('./routes/games');
var platforms = require('./routes/platforms');

// view engine setup
app.set('view engine', 'ejs');
app.use(ejsLayouts);

// set static to public folder
app.use(express.static('public'));

app.use('/', main);
app.use('/games', games);
app.use('/platforms', platforms);


app.listen(3000);
