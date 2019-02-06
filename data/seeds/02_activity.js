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
				engagement: 4
			},
			{
				name: 'Journaling',
				fk: 1,
				enjoymentRating: 4,
				energyLevel: 4,
				engagement: 5
			},
			{
				name: 'TV',
				fk: 1,
				enjoymentRating: 3,
				energyLevel: 2,
				engagement: 2
			},
			{
				name: 'Biking',
				fk: 1,
				enjoymentRating: 3,
				energyLevel: 3,
				engagement: 3
			},
			{
				name: 'Swimming',
				fk: 1,
				enjoymentRating: 4,
				energyLevel: 5,
				engagement: 5
			},
			{
				name: 'Running',
				fk: 1,
				enjoymentRating: 2,
				energyLevel: 3,
				engagement: 4
			},
			{
				name: 'TV',
				fk: 1,
				enjoymentRating: 3,
				energyLevel: 2,
				engagement: 4
			}
		]);
	});
};
