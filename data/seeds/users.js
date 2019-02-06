exports.seed = function(knex, Promise) {
	return knex('users').del().then(function() {
		return knex('users').insert([
			{
				username: 'admin',
				password: process.env.password || 'a',
				name: 'admin',
				email: 'admin'
			}
		]);
	});
};