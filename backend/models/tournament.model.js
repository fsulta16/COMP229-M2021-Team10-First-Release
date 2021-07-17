const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: Date, require: true },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Tournament", tournamentSchema);

module.exports = Exercise;
