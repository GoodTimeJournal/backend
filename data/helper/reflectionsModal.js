const db = require('../../knex');

module.exports = {
	getReflections,
	createReflection,
	deleteReflection,
	getReflection,
	editReflection
};

function getReflections() {
	return db('reflection');
}

function getReflection(id) {
	return db('reflection').where({ id }).first();
}

function createReflection(reflection) {
	return db('reflection').insert(reflection).into('reflection');
}

function deleteReflection(id) {
	return db('reflection').where({ id }).del();
}

function editReflection(id, reflection) {
	return db('reflection').where({ id }).update(reflection);
}
