const mongoose = require("mongoose");

const sessionCardSchema = new mongoose.Schema({
  title: String,
  // required: true
  date: String,
  topic: String,
  content: String,
  tags: [String],
  attendees: Object,
  author: String
});

module.exports = mongoose.model("SessionCard", sessionCardSchema);
