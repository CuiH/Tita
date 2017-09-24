const query = require('../util/mysqlPool');

const followingSql = require('../sql/followingSql');


const followingModel = {
	/* params = {follower_id, email} */
	create: (params) => {
		return new Promise((resolve, reject) => {
			query(followingSql.insert, [params.follower_id, params.email],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},
};

module.exports = followingModel;
