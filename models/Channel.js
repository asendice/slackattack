const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const channelSchema = new Schema(
  {
    serverId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    posts: {
      type: Array,
    },
  },
  {
    timestamps: true,
    collection: "channels",
  }
);

module.exports = mongoose.model("Channel", channelSchema);
 