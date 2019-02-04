
exports.up = function(knex, Promise) {
    return kknex.schema.createTable('users', table => {
        users.increments();

        users.string('username', 32).notNullable().unique();
        users.string('password', 32).notNullable();
        users.binary('avatar'); //TODO Ask freont-end how they want to render pic (do they want URL or upload)
    });
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
