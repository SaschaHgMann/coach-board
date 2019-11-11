const mongoose = require("mongoose");

const memberCardSchema = new mongoose.Schema({ 
  name: {
    type: String
  },
  age: {
    type: String
  },
  belt: {
    type: String
  },
  group: {
    type: String
  },
  memberImg: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("MemberCard", memberCardSchema);
