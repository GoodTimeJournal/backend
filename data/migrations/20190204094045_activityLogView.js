exports.up = function(knex, Promise) {
	return knex.schema.createTable('activity', (table) => {
		table.increments();
		table.string('name', 128).notNullable();
		table.integer('fk').notNullable().references('id').inTable('users');
		table.integer('enjoymentLevel').notNullable();
		table.integer('energyLevel').notNullable();
		table.text('engagement').notNullable();
		table.timestamp('timestamp').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('activity');
};
