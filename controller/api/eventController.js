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
		eventService.attendEvent(params)
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
		eventService.shareEvent(params)
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

eventRoute.get('/date',
	tokenAuthentication,
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		let params = req.body;
		params.user_id = req.user.id;
		params.start_date = req.query.s;
		params.end_date = req.query.e;
		eventService.getAllEventsByUserIdAndDate(params)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user queried one day's events.");
			})
			.catch(err => next(err));
	}
);

eventRoute.get('/source',
	tokenAuthentication,
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		let params = req.body;
		params.user_id = req.user.id;
		params.source = req.query.s;
		eventService.getAllFutureEventsByUserId(params)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user queried all future events.");
			})
			.catch(err => next(err));
	}
);

eventRoute.get('/liked',
	tokenAuthentication,
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		let params = req.body;
		params.user_id = req.user.id;
		eventService.getAllLikedEventsByUserId(params)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user queried all liked events.");
			})
			.catch(err => next(err));
	}
);

eventRoute.get('/keyword',
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		eventService.getAllEventsByKeywordId({keyword_id: req.query.k})
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user queried all events by keyword.");
			})
			.catch(err => next(err));
	}
);

eventRoute.get('/following',
	tokenAuthentication,
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		eventService.getAllEventsByFollowerId({follower_id: req.user.id})
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user queried all followee's events.");
			})
			.catch(err => next(err));
	}
);

eventRoute.get('/all',
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		eventService.getAllEvents({})
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user queried all events.");
			})
			.catch(err => next(err));
	}
);

eventRoute.get('/:id',
	bodyParser.urlencoded({extended: false}),
 	(req, res, next) => {
		eventService.getEventById({id: req.params.id})
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a user queried one event.");
			})
			.catch(err => next(err));
	}
);


module.exports = eventRoute;
