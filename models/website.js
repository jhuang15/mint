const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const websiteSchema = new Schema(
  {
    home: {
      type: String,
      required: true,
    },
    story: {
      type: String,
    },
    photos: {
      type: String,
    },
    rsvp: [inviteSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Website", websiteSchema);
