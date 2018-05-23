
exports.up = function (knex, Promise) {
  return knex.schema.createTable('trips', (table) => {
    table.increments();
    table.date('date')
    table.text('city')
    table.text('state')
    table.text('notes')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('trips')
};
