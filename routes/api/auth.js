const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ Status: "Successfully Access Auth Route...." });
});

module.exports = router;
