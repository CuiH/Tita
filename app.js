const express = require('express');

const userController = require('./controller/api/userController');
const eventController = require('./controller/api/eventController');
const followingController = require('./controller/api/followingController');
const goalController = require('./controller/api/goalController');


let app = express();

app.all('*', (req, res, next) => {
	res.header('Last-Modified', (new Date()).toUTCString());
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "x-access-token, Content-Type");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

	next();
});


app.use('/api/user', userController);
app.use('/api/event', eventController);
app.use('/api/following', followingController);
app.use('/api/goal', goalController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;

	next(err);
});

app.use(function(err, req, res, next) {
	// render the error page
	console.log(err);
	res.status(err.status || 500);

	res.json({result: "err", message: err.message});
});


module.exports = app;
