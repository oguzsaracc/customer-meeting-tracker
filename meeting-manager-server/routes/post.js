const express = require("express");

const router = express.Router(); // This creates a router object to handle routes in the application.

// Importing controllers
const { create, list, read, update, remove } = require("../controllers/post");

// Define the routes and associate them with specific controller functions.
router.post("/post", create); // Route to create a new post
router.get("/posts", list); // Route to retrieve a list of all posts
router.get("/post/:slug", read); // Route to retrieve a specific post by its slug
router.put("/post/:slug", update); // Route to update an existing post by its slug
router.delete("/post/:slug", remove); // Route to delete a post by its slug

module.exports = router; // Export the router to use it in other parts of the application.
