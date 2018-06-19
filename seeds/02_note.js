const notes = [
  {
    id: 1,
    trip_id: 1,
    type: 'restaurant',
    name: 'Primantis',
    note: 'Good, but weird, sandwiches with fries and coleslaw on them.'
  },
  {
    id: 2,
    trip_id: 1,
    type: 'museum',
    name: 'Andy Warhol Museum',
    note: 'Largest museum in the world dedicated to a single artist'
  },
  {
    id: 3,
    trip_id: 2,
    type: 'restaurant',
    name: 'Panzano',
    note: 'Incredible italian food but a little pricey'
  },
  {
    id: 4,
    trip_id: 2,
    type: 'park',
    name: 'Mt. Evans',
    note: 'Crazy road with incredible view and a lot of wildlife'
  },
  {
    id: 5,
    trip_id: 3,
    type: 'restaurant',
    name: 'The Pink House',
    note: 'Good restaurant in a historic colonial house. Cool speakeasy in basement.'
  },
  {
    id: 6,
    trip_id: 3,
    type: 'outdoor',
    name: 'River Street',
    note: 'Cool scenery and architecture. Lined with restaurants, shops, and, bars'
  }
]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "note"; ALTER SEQUENCE note_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('note').insert(notes);
    });
};
