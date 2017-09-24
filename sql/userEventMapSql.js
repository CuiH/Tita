const userEventMap = {
	insert: 'INSERT INTO user_event_map (user_id, event_id, source) VALUES (?, ?, ?)',
	updateSharedByUserIdAndEventId: 'UPDATE user_event_map SET is_shared = ?, ' +
	                                                      'shared_time = NOW() ' +
	                                'WHERE user_id = ? AND event_id = ?',
	selectAllByUserIdAndDate: 'SELECT e.* FROM event e, user_event_map uem ' +
	                          'WHERE uem.user_id = ? AND uem.event_id = e.id AND e.start_time >= ? ' +
	                                                'AND e.start_time <= ?',
	selectAllFutureByUserIdAndSource: 'SELECT e.* FROM event e, user_event_map uem ' +
	                                  'WHERE uem.user_id = ? AND uem.event_id = e.id AND uem.source = ? ' +
	                                                        'AND e.start_time > NOW()',
	selectAllByFollowerId: 'SELECT u.username, uem.shared_time, e.* FROM following f, user_event_map uem, event e, user u ' +
                           'WHERE f.follower_id = ? AND uem.user_id = f.followee_id AND e.id = uem.event_id ' +
	                             'AND uem.is_shared = "t" AND u.id = f.followee_id',
};

module.exports = userEventMap;
