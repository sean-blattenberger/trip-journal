const express = require("express");
const router = express.Router();
const knex = require("./database-connection");

router.post("/", (req, res, next) => {
  return knex("note")
    .insert(req.body)
    .returning("*")
  .then(note => {
    res.status(201).json({ note: note[0] });
  })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  return knex("note")
    .where("id", req.params.id)
    .del()
    .then(note => {
      res.status(200).json({ deleted: true });
    })
    .catch(next);
});
