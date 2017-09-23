const jwt = require('jsonwebtoken');

const tokenValues = require('../config/token');


const tokenAuthorization = (req, res, next) => {
	const token = req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, tokenValues.TOKEN_SECRET,
			(err, decoded) => {
				if (err) {
					// TODO handle error
					res.status(401);

					return next(err);
				}

				req.user = decoded;
				next();
			}
		);
	} else {
		res.status(401);
		next(new Error("no authorization token was found"));
	}
};

module.exports = tokenAuthorization;
