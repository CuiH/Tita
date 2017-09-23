const event = {
	insert: 'INSERT INTO event (title, start_time, end_time, location, ' +
	                           'gps, description, image_url, doc_link, ' +
	                           'homepage_link, type) ' +
	        'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
	selectOneById: 'SELECT * FROM event WHERE id = ?',
	selectAllLikedByUserId: 'SELECT e.* FROM event e, liking l WHERE l.user_id = ? ' +
	                                        'AND l.event_id = e.id',
};

module.exports = event;
