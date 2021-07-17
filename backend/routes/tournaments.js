const router = require("express").Router();
let Tournament = require("../models/tournament.model");

router.route("/").get((req, res) => {
  Tournament.find()
    .then((tournaments) => res.json(tournaments))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newTournament = new Tournament({ name, description, date });

  newTournament
    .save()
    .then(() => res.json("Tournament added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Tournament.findById(req.params.id)
    .then((tournament) => res.json(tournament))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Tournament.findByIdAndDelete(req.params.id)
    .then((tournament) => res.json("Tournament deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Tournament.findById(req.params.id)
    .then((tournament) => {
      tournament.name = req.body.name;
      tournament.description = req.body.description;
      tournament.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Tournament updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
