const tripsSeed = [
  {
    id: 1,
    date: "2013-04-10",
    city: "Pittsburgh",
    state: "PA",
    notes: ""
  },
  {
    id: 2,
    date: "2012-05-11",
    city: "Denver",
    state: "CO",
    notes: ""
  },
  {
    id: 3,
    date: "2011-06-12",
    city: "Savannah",
    state: "GA",
    notes: ""
  }
];
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "trips"; ALTER SEQUENCE trips_id_seq RESTART WITH 4;')
    .then(function() {
      // Inserts seed entries
      return knex("trips").insert(tripsSeed);
    });
};
