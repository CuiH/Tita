const jwt = require('jsonwebtoken');

const eventModel = require('../model/eventModel');
const userEventMapModel = require('../model/userEventMapModel');
const likingModel = require('../model/likingModel');
const eventKeywordMapModel = require('../model/eventKeywordMapModel');

const tokenValues = require('../config/token');


const eventService = {
	/* params = {title, start_time, end_time, location, gps,
	             description, image_url, doc_link, homepage_link, type} */
	/* results = {eventId} */
	createEvent: (params) => {
		/*
		 a) create a new 'event'
		 */
		return eventModel.create(params)
			.then((result) => {
				return {eventId: result.insertId};
			});
	},

	/* params = {user_id, event_id} */
	/* results = {} */
	attendEvent: (params) => {
		/*
		 a) attend an 'event'
		 */
		params.source = "self";
		return userEventMapModel.create(params)
			.then((result) => {
				return {};
			});
	},

	/* params = {user_id, event_id} */
	/* results = {} */
	shareEvent: (params) => {
		/*
		 a) share an 'event'
		 */
		params.is_shared = "t";
		return userEventMapModel.updateSharedByUserIdAndEventId(params)
			.then((result) => {
				return {};
			});
	},

	/* params = {user_id, event_id} */
	/* results = {} */
	likeEvent: (params) => {
		/*
		 a) like an 'event'
		 */
		return likingModel.create(params)
			.then((result) => {
				return {};
			});
	},

	/* params = {id} */
	/* results = {event} */
	getEventById: (params) => {
		/*
		 a) get 'event' by [id]
		 */
		return eventModel.findOneById(params)
			.then((result) => {
				return {event: result};
			});
	},

	/* params = {user_id, start_date, end_date} */
	/* results = {events} */
	getAllEventsByUserIdAndDate: (params) => {
		/*
		 a) get all 'event' by [user_id] and [start_time]
		 */
		return userEventMapModel.findAllByUserIdAndDate(params)
			.then((results) => {
				return {events: results};
			});
	},

	/* params = {user_id, source} */
	/* results = {events} */
	getAllFutureEventsByUserId: (params) => {
		/*
		 a) get all 'event' by [user_id] and [source]
		 */
		params.source = 'email';
		return userEventMapModel.findAllFutureByUserIdAndSource(params)
			.then((results) => {
				return {events: results};
			});
	},

	/* params = {user_id} */
	/* results = {events} */
	getAllLikedEventsByUserId: (params) => {
		/*
		 a) get all liked 'event' by [user_id]
		 */
		return eventModel.findAllLikedByUserId(params)
			.then((results) => {
				return {events: results};
			});
	},

	/* params = {keyword_id} */
	/* results = {events} */
	getAllEventsByKeywordId: (params) => {
		/*
		 a) get all 'event' by [keyword_id]
		 */
		return eventKeywordMapModel.findAllPublicByKeyWordId(params)
			.then((results) => {
				return {events: results};
			});
	},

	/* params = {follower_id} */
	/* results = {events} */
	getAllEventsByFollowerId: (params) => {
		/*
		 a) get all 'event' by [follower_id]
		 */
		return userEventMapModel.findAllByFollowerId(params)
			.then((results) => {
				return {events: results};
			});
	},
};

module.exports = eventService;
