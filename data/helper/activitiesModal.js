const db = require('../../knex');

module.exports = {
	getActivities,
	createActivity,
	deleteActivity,
	getActivity,
	editActivity
};

function getActivities() {
	return db('activities');
}

function getActivity(id) {
	return db('activities').where({ _id: id }).first();
}

function createActivity(activity) {
	return db('activities').insert(activity, '_id').into('activities');
}

function deleteActivity(id) {
	return db('activities').where({ _id: id }).del();
}

function editActivity(id, activity) {
	return db('activities').where({ _id: id }).update(activity);
}
