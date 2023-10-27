const Post = require("../models/post");
const slugify = require("slugify");

exports.create = (req, res) => {
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

  Post.create({ title, content, user, slug });
};
