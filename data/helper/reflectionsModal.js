const db = require('../../knex');

module.exports = {
	getReflections,
	createReflection,
	deleteReflection,
	getAReflection,
	editReflection
};

function getReflections() {
	return db('reflections');
}

function getReflection(id) {
	return db('reflections').where({ _id: id }).first();
}

function createReflection(reflection) {
	return db('reflections').insert(reflection, '_id').into('reflections');
}

function deleteReflection(id) {
	return db('reflections').where({ _id: id }).del();
}

function editReflection(id, reflection) {
	return db('reflections').where({ _id: id }).update(reflection);
}
