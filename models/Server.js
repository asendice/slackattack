const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serverSchema = new Schema(
  {
    admin: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    picture: {
      type: String,
    },
    channels: {
      type: Array,
    },
    users: {
      type: Array,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "servers",
  }
);

module.exports = mongoose.model("Server", serverSchema);
