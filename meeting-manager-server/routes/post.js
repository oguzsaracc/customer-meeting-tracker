const express = require("express");

const router = express.Router(); // We need this Router() function to handle routers in our scenario.

// Importing controllers
const { create } = require("../controllers/post");

router.post("/post", create);

module.exports = router;
