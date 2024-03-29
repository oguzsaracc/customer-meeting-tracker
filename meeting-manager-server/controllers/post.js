const Post = require("../models/post"); // Importing the Post model for database operations.
const slugify = require("slugify"); // Importing the slugify library for creating slugs.

exports.create = async (req, res) => {
  // console.log(req.body);
  const { title, content, user } = req.body;
  const slug = slugify(title); // The title of the customers will be passed in our api. For example: Michael Son -> api/michael-son

  // Validation - Before the creation of post method we are validating the data.
  switch (true) {
    case !title:
      return res.status(400).json({ error: "Customer title is required" });
      break;
    case !content:
      return res.status(400).json({ error: "Content is required" });
      break;
  }

  // If there are no validation errors, create a new post
  try {
    const post = await Post.create({ title, content, user, slug });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: "Duplication error. Please try with different customer title",
    });
  }
};

// In here, we will use the employee posts to find all posts with the find method.
exports.list = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 }).exec();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.read = async (req, res) => {
  // console.log(req.params.slug);
  const { slug } = req.params;
  try {
    const post = await Post.findOne({ slug }).exec();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  const { slug } = req.params;
  const { title, content, user } = req.body;
  try {
    // Find and update a post
    const post = await Post.findOneAndUpdate(
      { slug },
      { title, content, user },
      { new: true }
    ).exec();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.remove = async (req, res) => {
  // console.log(req.params.slug);
  const { slug } = req.params;
  try {
    // Find and remove a post by its slug
    const post = await Post.findOneAndRemove({ slug }).exec();
    res.json({ message: "A record deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
