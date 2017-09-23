const query = require('../util/mysqlPool');

const userEventMapSql = require('../sql/userEventMapSql');


const userEventMapModel = {
	/* params = {user_id, event_id, source} */
	create: (params) => {
		return new Promise((resolve, reject) => {
			query(userEventMapSql.insert, [params.user_id, params.event_id, params.source],
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
			query(userEventMapSql.selectAllByUserIdAndDate, [params.user_id,
					params.start_date, params.end_date],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

	/* params = {shared, user_id, event_id} */
	updateSharedByUserIdAndEventId: (params) => {
		return new Promise((resolve, reject) => {
			query(userEventMapSql.updateSharedByUserIdAndEventId, [params.is_shared,
					params.user_id, params.event_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},
};

module.exports = userEventMapModel;
