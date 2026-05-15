const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization"
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    },

    title: String,

    description: String,

    status: {
      type: String,
      enum: ["TODO", "IN_PROGRESS", "DONE"],
      default: "TODO"
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Task", taskSchema);