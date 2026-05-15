const router = require("express").Router();

const auth = require("../../middleware/auth.middleware");
const org = require("../../middleware/organization.middleware");

const Task = require("../../models/Task");

router.post("/", auth, org, async (req, res) => {
  const task = await Task.create({
    organization: req.organizationId,
    project: req.body.project,
    title: req.body.title,
    description: req.body.description,
    assignedTo: req.body.assignedTo
  });

  res.status(201).json(task);
});

router.get("/project/:projectId", auth, org, async (req, res) => {
  const tasks = await Task.find({
    organization: req.organizationId,
    project: req.params.projectId
  });

  res.json(tasks);
});

router.patch("/:id/status", auth, org, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    {
      _id: req.params.id,
      organization: req.organizationId
    },
    {
      status: req.body.status
    },
    {
      new: true
    }
  );

  res.json(task);
});

module.exports = router;