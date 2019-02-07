
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reflection').del()
    .then(function () {
      // Inserts seed entries
      return knex('reflection').insert([
        {
          week: "One",
          fk:  1,
          journalEntry: "Write more code, watch fewer cartoons.",
          insights: "My biggest insight this week was that, like, watching too much Netflix leads to me not having, like, enough time to actually get the things done that I want to, man. I am a sucker for escapist time-wasting, and that's like, not letting me be a ",
          trends: "It seems like each time I set aside time to work on learning the things I want to learn, I learn them a little better each time.",
          surprises: "I was surprised that my brain turned more and more to mush the more cartoons I watched on Netflix. I thought that watching cartoons cast magic spells would help me do magically good work."
      },
      {
          week: "Two",
          fk:  1,
          journalEntry: "Basically I need to convince the monks to hire a chef, I already put up an ad on Craigslist",
          insights: "I thought that joining a commune of monks on the side of a snowy mountain would help me refocus my life, but it turns out that when you travel to another country, you take all of your problems with you, they don't get stopped by some invisible problem barrier at the border.",
          trends: "The only trend that happened to me this week was that lentil soup gives me the runs, man. Every single time. My poor bowels.",
          surprises: "How much I enjoy the taste of lentil soup."
      }
      ]);
    });
};
