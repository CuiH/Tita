const express = require('express');
const bodyParser = require('body-parser');

const userService = require('../../service/userService');


const userRoute = express.Router();

userRoute.post('/register',
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		userService.createUser(req.body)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a new user registered.");
			})
			.catch(err => next(err));
	}
);

userRoute.post('/log_in',
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		userService.logIn(req.body)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user logged in.");
			})
			.catch(err => next(err));
	}
);


module.exports = userRoute;
