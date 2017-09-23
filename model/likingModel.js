const query = require('../util/mysqlPool');

const likingSql = require('../sql/likingSql');


const likingModel = {
	/* params = {user_id, event_id} */
	create: (params) => {
		return new Promise((resolve, reject) => {
			query(likingSql.insert, [params.user_id, params.event_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},
};

module.exports = likingModel;
