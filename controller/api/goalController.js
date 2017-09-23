const express = require('express');
const bodyParser = require('body-parser');

const goalService = require('../../service/goalService');

const tokenAuthentication = require('../../middleware/tokenAuthentication');


const goalRoute = express.Router();


goalRoute.post('/create',
	tokenAuthentication,
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		let params = req.body;
		params.user_id = req.user.id;
		goalService.createGoal(params)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a new goal created.");
			})
			.catch(err => next(err));
	}
);

goalRoute.post('/share',
	tokenAuthentication,
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		let params = req.body;
		params.user_id = req.user.id;
		goalService.shareGoal(params)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user shared an goal.");
			})
			.catch(err => next(err));
	}
);

goalRoute.post('/check',
	tokenAuthentication,
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		let params = req.body;
		params.user_id = req.user.id;
		goalService.checkGoal(params)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user checked an event.");
			})
			.catch(err => next(err));
	}
);


module.exports = goalRoute;
