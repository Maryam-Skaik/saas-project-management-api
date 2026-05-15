const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization"
    },

    name: String,

    description: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", projectSchema);