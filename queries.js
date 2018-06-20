const database = require("./database-connection");

module.exports = {
  list() {
    return database("trips");
  },
  read(id) {
    return database("trips")
      .select()
      .where("id", id)
      .first()
      .then((trip) => {
        return database('note')
          .select()
          .where("trip_id", id)
          .then((notes) => {
            trip.notes = notes;
            return trip;
          })
      })
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
      .del()
      .then(trip => {
        return database("note")
          .where("trip_id", id)
          .del()
    })
  }
};
