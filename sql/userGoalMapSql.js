const userGoalMap = {
	insert: 'INSERT INTO user_goal_map (user_id, goal_id, start_time, end_time) ' +
	        'VALUES (?, ?, ?, ?)',
	updateSharedById: 'UPDATE user_goal_map SET is_shared = ? , ' +
	                                                        'shared_time = NOW() ' +
	                               'WHERE id = ?',
	updateCheckedById: 'UPDATE user_goal_map SET is_checked = ? , ' +
	                                                         'checked_time = NOW() ' +
	                                'WHERE id = ?',
	selectAllByUserIdAndDate: 'SELECT g.title, g.description, ugm.start_time, ugm.end_time, ' +
	                                 'ugm.is_checked, ugm.checked_time ' +
	                          'FROM goal g, user_goal_map ugm ' +
	                          'WHERE ugm.user_id = ? AND ugm.goal_id = g.id AND ugm.start_time >= ? ' +
	                                                'AND ugm.start_time <= ?',
	selectAllByUserIdAndGoalId: 'SELECT ugm.* FROM goal g, user_goal_map ugm ' +
	                            'WHERE ugm.user_id = ? AND ugm.goal_id = g.id AND ugm.goal_id = ?',
	selectAllByFollowerId: 'SELECT u.username, ugm.shared_time, g.title, g.description, ' +
	                              'ugm.start_time, ugm.end_time ' +
	                       'FROM goal g, user_goal_map ugm, user u, following f ' +
	                       'WHERE f.follower_id = ? AND ugm.user_id = f.followee_id AND g.id = ugm.goal_id ' +
	                             'AND ugm.is_shared = "t" AND u.id = f.followee_id',
};

module.exports = userGoalMap;
