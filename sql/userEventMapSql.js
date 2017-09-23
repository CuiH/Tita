const userEventMap = {
	insert: 'INSERT INTO user_event_map (user_id, event_id, source) VALUES (?, ?, ?)',
	updateSharedByUserIdAndEventId: 'UPDATE user_event_map SET is_shared = ?, ' +
	                                                      'shared_time = NOW() ' +
	                                'WHERE user_id = ? AND event_id = ?',
	selectAllByUserIdAndDate: 'SELECT * FROM event e, user_event_map uem ' +
	                          'WHERE uem.user_id = ? AND uem.event_id = e.id AND e.start_time >= ? ' +
	                                                'AND e.start_time <= ?'
};

module.exports = userEventMap;
