const express = require("express");
const router = express.Router();

router.use("/auth", require("./api/auth"));
router.use("/jobs", require("./api/jobs"));

module.exports = router;
