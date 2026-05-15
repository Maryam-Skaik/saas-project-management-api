const authService = require("./auth.service");

exports.register = async (req, res) => {
  const data = await authService.register(req.body);

  res.status(201).json(data);
};

exports.login = async (req, res) => {
  const data = await authService.login(req.body);

  res.json(data);
};