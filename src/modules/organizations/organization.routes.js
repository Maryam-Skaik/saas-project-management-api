const router = require("express").Router();

const auth = require("../../middleware/auth.middleware");

const Organization = require("../../models/Organization");

router.post("/", auth, async (req, res) => {
  const organization = await Organization.create({
    name: req.body.name,
    members: [
      {
        user: req.user._id,
        role: "OWNER"
      }
    ]
  });

  res.status(201).json(organization);
});

router.post("/:id/join", auth, async (req, res) => {
  const organization = await Organization.findById(req.params.id);

  organization.members.push({
    user: req.user._id,
    role: "MEMBER"
  });

  await organization.save();

  res.json(organization);
});

module.exports = router;