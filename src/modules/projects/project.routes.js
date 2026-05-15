const router = require("express").Router();

const auth = require("../../middleware/auth.middleware");
const org = require("../../middleware/organization.middleware");

const Project = require("../../models/Project");

router.post("/", auth, org, async (req, res) => {
  const project = await Project.create({
    organization: req.organizationId,
    name: req.body.name,
    description: req.body.description
  });

  res.status(201).json(project);
});

router.get("/", auth, org, async (req, res) => {
  const projects = await Project.find({
    organization: req.organizationId
  });

  res.json(projects);
});

module.exports = router;