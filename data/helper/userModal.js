const db = require('../../knex');

module.exports = {
	createUser,
	findUserId,
	findUserName,
	getUsers
};

function createUser(user) {
	return db('users').insert(user).into('users');
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
