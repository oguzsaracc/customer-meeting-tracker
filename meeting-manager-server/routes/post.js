const express = require("express");

const router = express.Router(); // We need this Router() function to handle routers in our scenario.

// Importing controllers
const { create, list } = require("../controllers/post");

router.post("/post", create);
router.get("/posts", list);

module.exports = router;
