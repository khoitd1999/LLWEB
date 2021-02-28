var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(`mongodb+srv://${config.db.username}:${config.db.password}@newcluster.vdff5.mongodb.net/${config.db.dbname}?retryWrites=true&w=majority`, (err) => {
  if (err) 
    console.log(err);
  else 
    console.log('Mongodb connected successfully');
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var translate = require('./controllers/TranslateController');
var user = require('./controllers/UserController');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/tra-cuu-tu', translate);
app.use('/api/user', user);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
