const jwt = require('jsonwebtoken');

const goalModel = require('../model/goalModel');
const userGoalMapModel = require('../model/userGoalMapModel');

const value = require('../config/value');


const goalService = {
	/* params = {user_id, title, location, description, repeat_day, start_time, end_time} */
	/* results = {goalId} */
	createGoal: (params) => {
		/*
		 a) create a new 'goal'
		 b) create 'user_goal_map' according to the repeat_day
		 */
		let goalId;
		return goalModel.create(params)
			.then((result) => {
				goalId = result.insertId;

				let promises = [];

				let date = new Date();
				for (let i = 0; i < params.repeat_day.length; i++) {
					let day = value.WEEKDAY[params.repeat_day[i]];
					while (date.getDay() !== day)
						date.setDate(date.getDate() + 1);

					let prefix = date.toLocaleString().slice(0, 11);
					let startDate = new Date(prefix + params.start_time);
					let endDate = new Date(prefix + params.end_time);

					promises.push(userGoalMapModel.create({
						user_id: params.user_id,
						goal_id: result.insertId,
						start_time: startDate.toLocaleString(),
						end_time: endDate.toLocaleString()
					}));
				}

				return Promise.all(promises);
			})
			.then(() => {
				return {goalId: goalId};
			})
	},

	/* params = {user_id, ugm_id} */
	/* results = {} */
	shareGoal: (params) => {
		/*
		 a) share a 'goal'
		 */
		params.is_shared = "t";
		return userGoalMapModel.updateSharedById(params)
			.then((result) => {
				return {};
			});
	},

	/* params = {user_id, ugm_id} */
	/* results = {} */
	checkGoal: (params) => {
		/*
		 a) check a 'goal'
		 */
		params.is_checked = "t";
		return userGoalMapModel.updateCheckedById(params)
			.then((result) => {
				return {};
			});
	},

	/* params = {user_id, start_date, end_date} */
	/* results = {goals} */
	getAllGoalsByUserIdAndDate: (params) => {
		/*
		 a) get all 'goal' by [user_id] and [start_time] and [end_time]
		 */
		return userGoalMapModel.findAllByUserIdAndDate(params)
			.then((results) => {
				return {goals: results};
			});
	},

	/* params = {user_id, goal_id} */
	/* results = {goals} */
	getAllGoalsByUserIdAndGoalId: (params) => {
		/*
		 a) get all 'goal' by [user_id] and [goal_id]
		 */
		return userGoalMapModel.findAllByUserIdAndGoalId(params)
			.then((results) => {
				return {goals: results};
			});
	},

	/* params = {follower_id} */
	/* results = {goals} */
	getAllGoalsByFollowerId: (params) => {
		/*
		 a) get all 'goal' by [follower_id]
		 */
		return userGoalMapModel.findAllByFollowerId(params)
			.then((results) => {
				return {goals: results};
			});
	},

	/* params = {user_id} */
	/* results = {goals} */
	getAllGoalsByUserId: (params) => {
		/*
		 a) get all 'goal' by [user_id]
		 */
		return goalModel.findAllByUserId(params)
			.then((results) => {
				return {goals: results};
			});
	},
};

module.exports = goalService;
