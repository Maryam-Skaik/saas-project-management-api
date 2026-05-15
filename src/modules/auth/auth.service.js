const bcrypt = require("bcryptjs");

const authRepository = require("./auth.repository");
const { generateToken } = require("../../utils/jwt");

const register = async (data) => {
  const exists = await authRepository.findUserByEmail(data.email);

  if (exists) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await authRepository.createUser({
    ...data,
    password: hashedPassword
  });

  const token = generateToken({
    id: user._id
  });

  return {
    user,
    token
  };
};

const login = async (data) => {
  const user = await authRepository.findUserByEmail(data.email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(
    data.password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({
    id: user._id
  });

  return {
    user,
    token
  };
};

module.exports = {
  register,
  login
};