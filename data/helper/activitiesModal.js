const db = require('../../knex');

module.exports = {
	getActivities,
	createActivity,
	deleteActivity,
	getActivity,
	editActivity
};

function getActivities(id) {
	return db('activity').then((res) => res.filter((act) => act.fk == id));
}

function getActivity(id) {
	return db('activity').where({ id }).first();
}

function createActivity(activity) {
	return db('activity').insert(activity, 'id');
}

function deleteActivity(id) {
	return db('activity').where({ id }).del();
}

function editActivity(id, activity) {
	return db('activity').where({ id }).update(activity);
}
