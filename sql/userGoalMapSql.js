const userGoalMap = {
	insert: 'INSERT INTO user_goal_map (user_id, goal_id, start_time, end_time) ' +
	        'VALUES (?, ?, ?, ?)',
	updateSharedById: 'UPDATE user_goal_map SET is_shared = ? , ' +
	                                                        'shared_time = NOW() ' +
	                               'WHERE id = ?',
	updateCheckedById: 'UPDATE user_goal_map SET is_checked = ? , ' +
	                                                         'checked_time = NOW() ' +
	                                'WHERE id = ?',
};

module.exports = userGoalMap;
