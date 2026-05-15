const router = require("express").Router();

const controller = require("./auth.controller");

const validate = require("../../middleware/validate.middleware");

const {
  registerSchema,
  loginSchema
} = require("./auth.validation");

const asyncHandler = require("../../utils/asyncHandler");

router.post(
  "/register",
  validate(registerSchema),
  asyncHandler(controller.register)
);

router.post(
  "/login",
  validate(loginSchema),
  asyncHandler(controller.login)
);

module.exports = router;