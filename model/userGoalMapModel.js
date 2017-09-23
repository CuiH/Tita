const query = require('../util/mysqlPool');

const userGoalMapSql = require('../sql/userGoalMapSql');


const goalModel = {
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

	/* params = {shared, user_id, goal_id} */
	updateSharedByUserIdAndGoalId: (params) => {
		return new Promise((resolve, reject) => {
			query(userGoalMapSql.updateSharedByUserIdAndGoalId, [params.is_shared,
					params.user_id, params.goal_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

	/* params = {checked, user_id, goal_id} */
	updateCheckedByUserIdAndGoalId: (params) => {
		return new Promise((resolve, reject) => {
			query(userGoalMapSql.updateCheckedByUserIdAndGoalId, [params.is_checked,
					params.user_id, params.goal_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},
};

module.exports = goalModel;
