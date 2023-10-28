const Post = require("../models/post");
const slugify = require("slugify");

exports.create = async (req, res) => {
  // console.log(req.body);
  const { title, content, user } = req.body;
  const slug = slugify(title); // The title of the customers will be passed in our api. For example: Michael Son -> api/michael-son

  // Validation - Before the creation of post method we are validating the data.
  switch (true) {
    case !title:
      return res.status(400).json({ error: "Title is required" });
      break;
    case !content:
      return res.status(400).json({ error: "Content is required" });
      break;
  }

  // If there is no error, We will create a post.
  try {
    const post = await Post.create({ title, content, user, slug });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: "Duplication error. Please try with different customer name",
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
