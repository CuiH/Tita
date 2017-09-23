const userEventMap = {
	insert: 'INSERT INTO user_event_map (user_id, event_id, source) VALUES (?, ?, ?)',
	updateSharedByUserIdAndEventId: 'UPDATE user_event_map SET is_shared = ?, ' +
	                                                      'shared_time = NOW() ' +
	                                'WHERE user_id = ? AND event_id = ?',
};

module.exports = userEventMap;
