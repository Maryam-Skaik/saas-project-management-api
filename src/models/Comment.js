const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization"
    },

    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task"
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    content: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Comment", commentSchema);