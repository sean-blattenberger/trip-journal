exports.up = function(knex, Promise) {
  return knex.schema.createTable("note", table => {
    table.increments();
    table
      .integer("trip_id")
      .notNullable()
      .references("id")
      .inTable("trips")
      .onDelete("CASCADE")
      .index();
    table.text("type");
    table.text("name");
    table.text("note");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("note");
};
