const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inviteSchema = new Schema(
  {
    content: {
      type: String
    },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    userName: String,
  },
  {
    timestamps: true,
  }
);

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
