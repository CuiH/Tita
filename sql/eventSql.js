const event = {
	insert: 'INSERT INTO event (title, start_time, end_time, location, ' +
	                           'gps, description, image_url, doc_link, ' +
	                           'homepage_link, type) ' +
	        'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
};

module.exports = event;
