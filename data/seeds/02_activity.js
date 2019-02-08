exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('activity').del().then(function() {
		// Inserts seed entries
		return knex('activity').insert([
			{
				name: 'Running',
				fk: 1,
				enjoymentRating: 4,
				energyLevel: 3,
				engagement: 4,
				timestamp: '2019-02-01T23:40:10.451Z'
			},
			{
				name: 'Journaling',
				fk: 1,
				enjoymentRating: 4,
				energyLevel: 4,
				engagement: 5,
				timestamp: '2019-02-02T14:29:10.451Z'
			},
			{
				name: 'TV',
				fk: 1,
				enjoymentRating: 3,
				energyLevel: 2,
				engagement: 2,
				timestamp: '2019-02-03T13:30:10.451Z'
			},
			{
				name: 'Biking',
				fk: 1,
				enjoymentRating: 3,
				energyLevel: 3,
				engagement: 3,
				timestamp: '2019-02-04T11:11:10.451Z'
			},
			{
				name: 'Swimming',
				fk: 1,
				enjoymentRating: 4,
				energyLevel: 5,
				engagement: 5,
				timestamp: '2019-02-05T23:20:10.451Z'
			},
			{
				name: 'Running',
				fk: 1,
				enjoymentRating: 2,
				energyLevel: 3,
				engagement: 4,
				timestamp: '2019-02-06T20:33:10.451Z'
			},
			{
				name: 'TV',
				fk: 1,
				enjoymentRating: 3,
				energyLevel: 2,
				engagement: 4,
				timestamp: '2019-02-07T16:49:10.451Z'
			}
		]);
	});
};
