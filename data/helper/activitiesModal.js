const db = require('../../knex');

module.exports = {
	getActivities,
	createActivity,
	deleteActivity,
	getActivity,
	editActivity
};

function getActivities() {
	return db('activity');
}

function getActivity(id) {
	return db('activity')
		.where({ id })
		.first();
}

function createActivity(activity) {
	return db('activity')
		.insert(activity)
		.into('activity');
}

function deleteActivity(id) {
	return db('activity')
		.where({ id })
		.del();
}

function editActivity(id, activity) {
	return db('activity')
		.where({ id })
		.update(activity);
}
