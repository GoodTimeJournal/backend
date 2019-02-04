exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (table) => {
		table.increments();

		table.string('username', 32).notNullable().unique();
		table.string('password', 32).notNullable();
		table.binary('avatar');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
