const goal = {
	insert: 'INSERT INTO goal (title, description, repeat_day, duration, user_id) ' +
	        'VALUES (?, ?, ?, ?, ?)',
};

module.exports = goal;
