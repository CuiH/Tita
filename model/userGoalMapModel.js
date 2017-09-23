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
