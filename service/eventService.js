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

	/* params = {user_id} */
	/* results = {events} */
	getAllTodayEventsByUserId: (params) => {
		/*
		 a) get all today 'event' by [user_id]
		 */
		let start_date = new Date();
		params.start_date = start_date.toLocaleString();

		let end_date = new Date();
		end_date.setDate(end_date.getDate() + 1);
		params.end_date = end_date.toLocaleString();

		return userEventMapModel.findAllByUserIdAndDate(params)
			.then((results) => {
				return {events: results};
			});
	},

	/* params = {user_id, start_date, end_date} */
	/* results = {events} */
	getAllEventsByUserIdAndDate: (params) => {
		/*
		 a) get all 'event' by [user_id] and [start_time]
		 */
		let start_date = new Date(params.start_date);
		params.start_date = start_date.toDateString();

		let end_date = new Date(start_date);
		end_date.setDate(end_date.getDate() + 1);
		params.end_date = end_date.toDateString();

		return userEventMapModel.findAllByUserIdAndDate(params)
			.then((results) => {
				return {events: results};
			});
	},
};

module.exports = eventService;
