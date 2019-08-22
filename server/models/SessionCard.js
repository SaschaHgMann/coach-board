const mongoose = require("mongoose");

const sessionCardSchema = new mongoose.Schema({
  date: {
    type: String
  },
  topic: {
    type: String
  },
  content: {
    type: String
  },
  categories: {
    type: [String]
  },
  attendees: {
    type: [Object]
  },
  author: {
    type: String
  },
  group: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("SessionCard", sessionCardSchema);
