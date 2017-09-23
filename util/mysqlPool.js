const mysql = require('mysql');
const conf = require('../config/db');


const pool = mysql.createPool(conf);

const query = (sql, values, callback) => {
	pool.getConnection((err, conn) => {
		if (err) {
			callback(err, null, null);

			return;
		}

		conn.query(sql, values, (err, results, fields) => {
			conn.release();

			if (err) {
				callback(err, null, null);

				return;
			}

			callback(null, results, fields);
		})
	})
};

module.exports = query;
