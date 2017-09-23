const query = require('../util/mysqlPool');

const eventSql = require('../sql/eventSql');


const eventModel = {
	/* params = {title, start_time, end_time, location, gps,
	             description, image_url, doc_link, homepage_link, type} */
	create: (params) => {
		return new Promise((resolve, reject) => {
			query(eventSql.insert, [params.title, params.start_time, params.end_time, params.location,
					params.gps, params.description, params.image_url, params.doc_link,
					params.homepage_link, params.type],
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
			query(eventSql.selectOneById, [params.id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

	/* params = {user_id} */
	findAllLikedByUserId: (params) => {
		return new Promise((resolve, reject) => {
			query(eventSql.selectAllLikedByUserId, [params.user_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},

};

module.exports = eventModel;
