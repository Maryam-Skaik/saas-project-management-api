require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Organization = require("../models/Organization");

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await User.deleteMany();
  await Organization.deleteMany();

  const password = await bcrypt.hash("password123", 10);

  const user = await User.create({
    name: "Admin User",
    email: "admin@example.com",
    password
  });

  const organization = await Organization.create({
    name: "Acme Inc",
    members: [
      {
        user: user._id,
        role: "OWNER"
      }
    ]
  });

  console.log("Seed completed");

  process.exit();
};

seed();