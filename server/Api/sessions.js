const express = require("express");
const SessionCard = require("../models/SessionCard");
const router = express.Router();

router.get("/", (req, res) => {
  SessionCard.find()
    .then(session => res.json(session))
    .catch(err => res.json(err));
});

router.post("/", (req, res) => {
  SessionCard.create(req.body)
    .then(session => res.json(session))
    .catch(err => res.json(err));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  SessionCard.findByIdAndUpdate(id, req.body, { new: true })
    .then(session => res.json(session))
    .catch(err => res.json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  SessionCard.findByIdAndRemove(id, { new: true })
    .then(session => res.json(session))
    .catch(err => res.json(err));
});

module.exports = router;
