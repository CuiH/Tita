const query = require('../util/mysqlPool');

const userGoalMapSql = require('../sql/userGoalMapSql');


const userGoalMapModel = {
	/* params = {user_id, goal_id, start_time, end_time} */
	create: (params) => {
		return new Promise((resolve, reject) => {
			query(userGoalMapSql.insert, [params.user_id, params.goal_id,
					params.start_time, params.end_time],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

	/* params = {user_id, start_date, end_date} */
	findAllByUserIdAndDate: (params) => {
		return new Promise((resolve, reject) => {
			query(userGoalMapSql.selectAllByUserIdAndDate, [params.user_id,
					params.start_date, params.end_date],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

	/* params = {user_id, goal_id} */
	findAllByUserIdAndGoalId: (params) => {
		return new Promise((resolve, reject) => {
			query(userGoalMapSql.selectAllByUserIdAndGoalId, [params.user_id,
					params.goal_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

	/* params = {follower_id} */
	findAllByFollowerId: (params) => {
		return new Promise((resolve, reject) => {
			query(userGoalMapSql.selectAllByFollowerId, [params.follower_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

	/* params = {shared, ugm_id} */
	updateSharedById: (params) => {
		return new Promise((resolve, reject) => {
			query(userGoalMapSql.updateSharedById, [params.is_shared,
					params.ugm_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

	/* params = {checked, ugm_id} */
	updateCheckedById: (params) => {
		return new Promise((resolve, reject) => {
			query(userGoalMapSql.updateCheckedById, [params.is_checked,
					params.ugm_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},
};

module.exports = userGoalMapModel;
