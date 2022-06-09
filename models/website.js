const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inviteSchema = new Schema(
  {
    invite: {
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
    name1: {
      type: String,
      required: true,
    },
    name2: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
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
    user: {type:Schema.Types.ObjectId, ref:"User"}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Website", websiteSchema);
