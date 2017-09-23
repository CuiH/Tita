const express = require('express');
const bodyParser = require('body-parser');

const eventService = require('../../service/eventService');

const tokenAuthentication = require('../../middleware/tokenAuthentication');


const eventRoute = express.Router();


eventRoute.post('/create',
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		eventService.createEvent(req.body)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a new event created.");
			})
			.catch(err => next(err));
	}
);

eventRoute.post('/attend',
	tokenAuthentication,
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		let params = req.body;
		params.user_id = req.user.id;
		eventService.attendEvent(req.body)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user attended an event.");
			})
			.catch(err => next(err));
	}
);

eventRoute.post('/share',
	tokenAuthentication,
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		let params = req.body;
		params.user_id = req.user.id;
		eventService.shareEvent(req.body)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user shared an event.");
			})
			.catch(err => next(err));
	}
);

eventRoute.post('/like',
	tokenAuthentication,
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		let params = req.body;
		params.user_id = req.user.id;
		eventService.likeEvent(req.body)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user liked an event.");
			})
			.catch(err => next(err));
	}
);


module.exports = eventRoute;
