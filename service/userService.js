const jwt = require('jsonwebtoken');

const exec = require('child_process').exec;

const userModel = require('../model/userModel');
const userEmailModel = require('../model/userEmailModel');

const tokenValues = require('../config/token');


const userService = {
	/* params = {username, password} */
	/* results = {userId} */
	createUser: (params) => {
		/*
		 a) create a new 'user'
		 */
		return userModel.create(params)
			.then((result) => {
				return {userId: result.insertId};
			});
	},

	/* params = {email, password} */
	/* results = {id, username, token} */
	logIn: (params) => {
		/*
		 a) get 'user' with [email]
		 b) verify the [password]
		 c) generate token
		 */
		let userId = null;
		return userModel.findOneByEmail(params)
			.then((results) => {
				if (results.length === 0)
					return Promise.reject(new Error('no such user'));

				const user = results[0];
				if (user.password !== params.password)
					return Promise.reject(new Error('wrong password'));

				userId = results[0].id;

				const token = jwt.sign({
					id: userId,
					username: params.username
				}, tokenValues.TOKEN_SECRET, {expiresIn: tokenValues.TOKEN_EXPIRATION});

				return {id: userId, username: params.username, token: token};
			});
	},

	/* params = {user_id, email, pwd} */
	/* results = {} */
	addEmail: (params) => {
		/*
		 a) add a 'user_email'
		 */
		return userEmailModel.insert(params)
			.then((result) => {
				return {};
			});
	},
};

module.exports = userService;
