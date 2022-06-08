const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inviteSchema = new Schema(
  {
    rsvp: {
      type: String
    },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    userName: String,
  },
  {
    timestamps: true,
  }
);