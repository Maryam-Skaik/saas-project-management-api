const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema(
  {
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization"
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    action: String,

    entityType: String,

    entityId: mongoose.Schema.Types.ObjectId
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("ActivityLog", activityLogSchema);