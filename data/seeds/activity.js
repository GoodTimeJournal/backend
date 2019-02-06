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
				timestamp: '02/2 06:15 pm',
				id: 66
			},
			{
				name: 'Journaling',
				fk: 1,
				enjoymentRating: 4,
				energyLevel: 4,
				engagement: 5,
				timestamp: '01/30 02:05 pm',
				id: 25
			},
			{
				name: 'TV',
				fk: 1,
				enjoymentRating: 3,
				energyLevel: 2,
				engagement: 2,
				timestamp: '01/28 09:20 pm',
				id: 266
			},
			{
				name: 'Biking',
				fk: 1,
				enjoymentRating: 3,
				energyLevel: 3,
				engagement: 3,
				timestamp: '01/23 04:45 pm',
				id: 26634
			},
			{
				name: 'Swimming',
				fk: 1,
				enjoymentRating: 4,
				energyLevel: 5,
				engagement: 5,
				timestamp: '01/13 12:45 pm',
				id: 26543
			},
			{
				name: 'Running',
				fk: 1,
				enjoymentRating: 2,
				energyLevel: 3,
				engagement: 4,
				timestamp: '02/2 06:15 pm',
				id: 6611
			},
			{
				name: 'TV',
				fk: 1,
				enjoymentRating: 3,
				energyLevel: 2,
				engagement: 4,
				timestamp: '01/28 09:20 pm',
				id: 26611
			}
		]);
	});
};
