require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
var cookieSession = require('cookie-session');
const flash = require('connect-flash');
const passportConfig = require('./config/passport');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: false, limit: '200mb' }));
app.use(cookieParser('21132rrf'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());
app.use(
	cookieSession({
		name: '6IAGV0R0GDQFG9JWSAIGa',
		keys: ['HIF9XFFV4U7MQ1ZN00WPx', 'VLD7RNL5G8KGRZW7EHWE'],
		maxAge: 24 * 60 * 60 * 1000,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/api/customer', require('./api/customer'));
app.use('/api/guru', require('./api/guru'));
app.use('/api/murid', require('./api/murid'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
