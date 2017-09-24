const goal = {
	insert: 'INSERT INTO goal (title, description, location, repeat_day, ' +
	                          'start_time, end_time, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
	selectAllByUserId: 'SELECT * FROM goal WHERE user_id = ?'
};

module.exports = goal;
