const user = {
	insert: 'INSERT INTO user (email, password, username) VALUES (?, ?, ?)',
	selectOneByUsername: 'SELECT * FROM user where email = ?',
	selectOneById: 'SELECT * FROM user where id = ?'
};

module.exports = user;
