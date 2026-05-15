const router = require("express").Router();

const auth = require("../../middleware/auth.middleware");
const org = require("../../middleware/organization.middleware");

const Comment = require("../../models/Comment");

router.post("/", auth, org, async (req, res) => {
  const comment = await Comment.create({
    organization: req.organizationId,
    task: req.body.task,
    user: req.user._id,
    content: req.body.content
  });

  res.status(201).json(comment);
});

router.get("/task/:taskId", auth, org, async (req, res) => {
  const comments = await Comment.find({
    organization: req.organizationId,
    task: req.params.taskId
  });

  res.json(comments);
});

module.exports = router;