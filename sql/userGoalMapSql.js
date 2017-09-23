const userGoalMap = {
	insert: 'INSERT INTO user_goal_map (user_id, goal_id, start_time, end_time) ' +
	        'VALUES (?, ?, ?, ?)',
	updateSharedByUserIdAndGoalId: 'UPDATE user_goal_map SET is_shared = ? , ' +
	                                                        'shared_time = NOW() ' +
	                               'WHERE user_id = ? AND goal_id = ?',
	updateCheckedByUserIdAndGoalId: 'UPDATE user_goal_map SET is_checked = ? , ' +
	                                                         'checked_time = NOW() ' +
	                                'WHERE user_id = ? AND goal_id = ?',
};

module.exports = userGoalMap;
