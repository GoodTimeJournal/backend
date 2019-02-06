exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (table) => {
		table.increments();
		table.string('name', 64).notNullable();
		table.string('email', 32).notNullable();
		table.string('username', 32).notNullable().unique();
		table.string('password', 128).notNullable();
		table.string('avatar');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
