const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema(
  {
    name: String,

    members: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        },
        role: {
          type: String,
          enum: ["OWNER", "ADMIN", "MEMBER"],
          default: "MEMBER"
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Organization", organizationSchema);