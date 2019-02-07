exports.seed = function(knex, Promise) {
	return knex('users').del().then(function() {
		return knex('users').insert([
			{
				username: 'admin',
				password: process.env.password,
				name: 'admin',
				email: 'admin'
			},
			{
				username: 'alex',
				password: process.env.password,
				name: 'admin',
				email: 'admin'
			},
			{
				username: 'brandon',
				password: process.env.password,
				name: 'admin',
				email: 'admin'
			}
		]);
	});
};
