const query = require('../util/mysqlPool');

const userSql = require('../sql/userSql');


const userModel = {
	/* params = {username, password} */
	create: (params) => {
		return new Promise((resolve, reject) => {
			query(userSql.insert, [params.email, params.password, params.username],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

	/* params = {email} */
	findOneByEmail: (params) => {
		return new Promise((resolve, reject) => {
			query(userSql.selectOneByUsername, [params.email],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

	/* params = {id} */
	findOneById: (params) => {
		return new Promise((resolve, reject) => {
			query(userSql.selectOneById, [params.id],
				(err, results, fields) => {
					if (err) {
						return reject(err);
					}

					resolve(results);
				}
			);
		});
	}
};

module.exports = userModel;
