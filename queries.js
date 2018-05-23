const database = require("./database-connection");

module.exports = {
  list() {
    return database("trips");
  },
  read(id) {
    return database("trips")
      .select()
      .where("id", id)
      .first();
  },
  create(trips) {
    return database("trips")
      .select()
      .insert(trips)
      .returning("*");
  },
  update(id, trips) {
    return database("trips")
      .select()
      .where("id", id)
      .update(trips)
      .returning("*");
  },
  delete(id) {
    return database("trips")
      .select()
      .where("id", id)
      .del();
  }
};