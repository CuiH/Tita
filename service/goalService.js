const jwt = require('jsonwebtoken');

const goalModel = require('../model/goalModel');
const userGoalMapModel = require('../model/userGoalMapModel');

const value = require('../config/value');


const goalService = {
	/* params = {title, description, repeat_day, duration} */
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

					promises.push(userGoalMapModel.create({
						user_id: params.user_id,
						goal_id: result.insertId
					}));
				}

				return Promise.all(promises);
			})
			.then(() => {
				return {goalId: goalId};
			})
	},

	/* params = {user_id, goal_id} */
	/* results = {} */
	shareGoal: (params) => {
		/*
		 a) share a 'goal'
		 */
		params.is_shared = "t";
		return userGoalMapModel.updateSharedByUserIdAndGoalId(params)
			.then((result) => {
				return {};
			});
	},

	/* params = {user_id, goal_id} */
	/* results = {} */
	checkGoal: (params) => {
		/*
		 a) check a 'goal'
		 */
		params.is_checked = "t";
		return userGoalMapModel.updateCheckedByUserIdAndGoalId(params)
			.then((result) => {
				return {};
			});
	},
};

module.exports = goalService;
