const db = require('../../knex');

module.exports = {
	createUser,
	findUserId,
	findUserName,
	getUsers
	// returnId
};

function createUser(user) {
	return db('users').insert(user).into('users').returning('users');
}

function findUserName(username) {
	return db('users').where({ username }).first();
}

function findUserId(id) {
	return db('users').where({ id }).first();
}

function getUsers() {
	return db('users');
}

// function returnId(username) {
// 	return db('users').where({ username }).then((res) => {
// 		return findUserName(res.username);
// 	});
// }
