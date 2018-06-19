const express = require("express");
const router = express.Router();
const queries = require("../../queries");

router.get("/", (req, res) => {
  console.log('TRIPS')
  queries.list().then(trips => res.json(trips));
});

router.get("/:id", (req, res) => {
  queries.read(req.params.id).then(trip => res.json(trip));
});

router.post('/', (req, res, next) => {
  queries.create(req.body).then(trip => {
    res.status(201).json({ trip: trip[0] })
  }).catch(next);
});

router.delete('/:id', (req, res, next) => {
  queries.delete(req.params.id).then(trip => {
    res.status(201).json({ deleted: true })
  }).catch(next);
});

router.put('/:id', (req, res, next) => {
  queries.update(req.params.id, req.body).then(trip => {
    res.json({ trip: trip[0] });
  }).catch(next);
});

module.exports = router;
