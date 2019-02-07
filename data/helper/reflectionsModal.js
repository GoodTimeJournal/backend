const db = require('../../knex');

module.exports = {
	getReflections,
	createReflection,
	deleteReflection,
	getReflection,
	editReflection
};

function getReflections(id) {
	return db('reflection').then((res) => res.filter((act) => act.fk == id));
}

function getReflection(id) {
	return db('reflection').where({ id }).first();
}

function createReflection(reflection) {
	return db('reflection').insert(reflection, 'id');
}

function deleteReflection(id) {
	return db('reflection').where({ id }).del();
}

function editReflection(id, reflection) {
	return db('reflection').where({ id }).update(reflection, 'id');
}
