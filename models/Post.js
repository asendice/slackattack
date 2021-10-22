const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    channelId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    created:{
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    collection: "posts",
  }
);

module.exports = mongoose.model("Posts", postSchema);
