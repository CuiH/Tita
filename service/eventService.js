const jwt = require('jsonwebtoken');

const eventModel = require('../model/eventModel');
const userEventMapModel = require('../model/userEventMapModel');
const likingModel = require('../model/likingModel');

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
};

module.exports = eventService;
