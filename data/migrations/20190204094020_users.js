exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (table) => {
		users.increments();

		users.string('username', 32).notNullable().unique();
		users.string('password', 32).notNullable();
		users.binary('avatar');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
