const express = require('express');
const bodyParser = require('body-parser');

const followingService = require('../../service/followingService');

const tokenAuthentication = require('../../middleware/tokenAuthentication');


const followingRoute = express.Router();

followingRoute.post('/follow',
	tokenAuthentication,
	bodyParser.urlencoded({extended: false}),
	(req, res, next) => {
		let params = req.body;
		params.follower_id = req.user.id;
		followingService.follow(params)
			.then((results) => {
				res.json({result: 'success', data: results});
				console.log("a new following created.");
			})
			.catch(err => next(err));
	}
);


module.exports = followingRoute;
