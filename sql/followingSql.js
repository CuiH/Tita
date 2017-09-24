const following = {
	insert: 'INSERT into following (follower_id, followee_id) ' +
	        'VALUES (?, (select id from user where email = ?))'
};

module.exports = following;
