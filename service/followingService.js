const followingModel = require('../model/followingModel');


const followingService = {
	/* params = {follower_id, email} */
	/* results = {} */
	follow: (params) => {
		/*
		 a) create a new 'following'
		 */
		return followingModel.create(params)
			.then((result) => {
				return {};
			});
	}
};

module.exports = followingService;
