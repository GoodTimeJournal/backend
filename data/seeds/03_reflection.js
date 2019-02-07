
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reflection').del()
    .then(function () {
      // Inserts seed entries
      return knex('reflection').insert([
        {
          week: "One",
          fk:  1,
          journalEntry: "I have a lot of positive energy and feel healthier after a long week of exercising. I feel happy and optimistic about life.",
          insights: "This was a good week, it was my first week being this active and by Friday, I really felt better",
          trends: "The more exercise you do, the more exercise you want to do",
          surprises: "This was a very active week, I found that the more activity I did, the more energy I had."
        }
      ]);
    });
};
