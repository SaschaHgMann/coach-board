module.exports = function(app) {
  const SessionCard = require("./models/SessionCard");
  //const Member = require("../models/Members");

  app.get("/api/sessions", (req, res) => {
    SessionCard.find()
      .then(session => res.json(session))
      .catch(err => res.json(err));
  });

  app.post("/api/sessions", (req, res) => {
    console.log(req.body);
    SessionCard.create(req.body)
      .then(session => res.json(session))
      .catch(err => console.log(err));
  });

  app.patch("/api/sessions/:id", (req, res) => {
    const { id } = req.params;
    SessionCard.findByIdAndUpdate(id, req.body, { new: true })
      .then(session => res.json(session))
      .catch(err => res.json(err));
  });

  app.delete("/api/sessions/:id", (req, res) => {
    const { id } = req.params;
    SessionCard.findByIdAndRemove(id, { new: true })
      .then(session => res.json(session))
      .catch(err => res.json(err));
  });
};
