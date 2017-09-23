const followingModel = require('../model/followingModel');


const followingService = {
	/* params = {followee_id, follower_id} */
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
