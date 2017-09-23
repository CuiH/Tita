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
};

module.exports = userGoalMap;
