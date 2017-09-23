const query = require('../util/mysqlPool');

const eventKeywordMapSql = require('../sql/eventKeywordMapSql');


const eventKeywordMapModel = {
	/* params = {keyword_id} */
	findAllPublicByKeyWordId: (params) => {
		return new Promise((resolve, reject) => {
			query(eventKeywordMapSql.selectAllPublicByKeywordId, [params.keyword_id],
				(err, results, fields) => {
					if (err) return reject(err);

					resolve(results);
				}
			);
		});
	},
};

module.exports = eventKeywordMapModel;
