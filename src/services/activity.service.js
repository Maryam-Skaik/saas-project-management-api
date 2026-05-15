const ActivityLog = require("../models/ActivityLog");

const logActivity = async ({
  organization,
  user,
  action,
  entityType,
  entityId
}) => {
  await ActivityLog.create({
    organization,
    user,
    action,
    entityType,
    entityId
  });
};

module.exports = {
  logActivity
};