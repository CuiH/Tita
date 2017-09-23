const query = require('../util/mysqlPool');

const followingSql = require('../sql/followingSql');


const followingModel = {
	/* params = {followee_id, follower_id} */
	create: (params) => {
		return new Promise((resolve, reject) => {
			query(followingSql.insert, [params.followee_id, params.follower_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},
};

module.exports = followingModel;
