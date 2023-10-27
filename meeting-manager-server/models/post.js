const mongoose = reqiure("mongoose");
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
  {
    title: {
      // Creating a schema for the post. It's a schema definition with a type of String.
      type: String,
      trim: true,
      min: 3,
      max: 160,
      required: true,
    },
    slug: {
      // Instead of usage of Id, we used slug to avoid from harsh looking url in browser. So it will boost code as user-friendly.
      type: String,
      unique: true,
      index: true,
      lowercase: true,
    },
    content: {
      // To create a post we will require a content.
      type: {},
      required: true,
      min: 20,
      max: 2000000,
    },
    user: {
      type: String,
      default: "Admin",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
