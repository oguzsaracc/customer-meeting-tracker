const express = require("express");

const router = express.Router(); // We need this Router() function to handle routers in our scenario.

// Importing controllers
const { create, list, read } = require("../controllers/post");

router.post("/post", create);
router.get("/posts", list);
router.get("/post/:slug", read);

module.exports = router;
