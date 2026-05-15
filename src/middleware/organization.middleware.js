const Organization = require("../models/Organization");

module.exports = async (req, res, next) => {
  const organizationId = req.headers["x-organization-id"];

  if (!organizationId) {
    return res.status(400).json({
      message: "Organization header missing"
    });
  }

  const organization = await Organization.findById(organizationId);

  if (!organization) {
    return res.status(404).json({
      message: "Organization not found"
    });
  }

  const member = organization.members.find(
    (m) => m.user.toString() === req.user._id.toString()
  );

  if (!member) {
    return res.status(403).json({
      message: "Not organization member"
    });
  }

  req.organization = organization;
  req.organizationId = organization._id;

  next();
};