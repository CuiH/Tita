const goal = {
	insert: 'INSERT INTO goal (title, description, location, repeat_day, ' +
	                          'start_time, end_time, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
};

module.exports = goal;
