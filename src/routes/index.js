const router = require("express").Router();

router.use("/auth", require("../modules/auth/auth.routes"));

router.use(
  "/orgs",
  require("../modules/organizations/organization.routes")
);

router.use(
  "/projects",
  require("../modules/projects/project.routes")
);

router.use(
  "/tasks",
  require("../modules/tasks/task.routes")
);

router.use(
  "/comments",
  require("../modules/comments/comment.routes")
);

router.use(
  "/activity-logs",
  require("../modules/activityLogs/activity.routes")
);

module.exports = router;