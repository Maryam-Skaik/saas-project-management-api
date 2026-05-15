module.exports = (...roles) => {
  return (req, res, next) => {
    const member = req.organization.members.find(
      (m) => m.user.toString() === req.user._id.toString()
    );

    if (!member || !roles.includes(member.role)) {
      return res.status(403).json({
        message: "Forbidden"
      });
    }

    next();
  };
};