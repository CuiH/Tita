const query = require('../util/mysqlPool');

const userEmailSql = require('../sql/userEmailSql');


const userEmailModel = {
	/* params = {user_id, email, pwd} */
	insert: (params) => {
		return new Promise((resolve, reject) => {
			query(userEmailSql.insert, [params.user_id, params.email, params.pwd],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

};

module.exports = userEmailModel;
