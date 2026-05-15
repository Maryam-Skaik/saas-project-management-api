const User = require("../../models/User");

const createUser = (data) => User.create(data);

const findUserByEmail = (email) => User.findOne({ email });

module.exports = {
  createUser,
  findUserByEmail
};