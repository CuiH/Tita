const query = require('../util/mysqlPool');

const goalSql = require('../sql/goalSql');


const goalModel = {
	/* params = {title, description, repeat_day, duration, user_id} */
	create: (params) => {
		return new Promise((resolve, reject) => {
			query(goalSql.insert, [params.title, params.description,
					params.repeat_day, params.duration, params.user_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},
};

module.exports = goalModel;
