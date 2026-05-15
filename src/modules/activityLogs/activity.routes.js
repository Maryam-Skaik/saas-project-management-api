const router = require("express").Router();

const auth = require("../../middleware/auth.middleware");
const org = require("../../middleware/organization.middleware");

const ActivityLog = require("../../models/ActivityLog");

router.get("/", auth, org, async (req, res) => {
  const logs = await ActivityLog.find({
    organization: req.organizationId
  }).sort({
    createdAt: -1
  });

  res.json(logs);
});

module.exports = router;