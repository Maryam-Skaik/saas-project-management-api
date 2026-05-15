const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const routes = require("./routes");

const errorMiddleware = require("./middleware/error.middleware");
const loggerMiddleware = require("./middleware/logger.middleware");
const rateLimitMiddleware = require("./middleware/rateLimit.middleware");

const app = express();

/* ---------------- Middlewares ---------------- */
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(loggerMiddleware);
app.use(rateLimitMiddleware);

/* ---------------- Test Route ---------------- */
app.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

/* ---------------- API Routes ---------------- */
app.use("/api", routes);

/* ---------------- Error Handler ---------------- */
app.use(errorMiddleware);

module.exports = app;