const query = require('../util/mysqlPool');

const goalSql = require('../sql/goalSql');


const goalModel = {
	/* params = {user_id, title, description, location, repeat_day, start_time, end_time} */
	create: (params) => {
		return new Promise((resolve, reject) => {
			query(goalSql.insert, [params.title, params.description, params.location,
					params.repeat_day, params.start_time, params.end_time, params.user_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},
};

module.exports = goalModel;
