const express = require("express");

const router = express.Router(); // We need this Router() function to handle routers in our scenario.

router.get("/post", (req, res) => {
  res.json({
    data: "Successfully reached nodejs api for customer-meeting-tracker application",
  });
});

module.exports = router;
