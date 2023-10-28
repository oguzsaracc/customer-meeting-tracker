import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
      .then((response) => setPost(response.data))
      .catch((error) => alert("Error due to load single customer note"));
  }, [props.match.params.slug]);

  return (
    <div className="container pb-5">
      <Navigation />
      <br />
      <h1>{post.title}</h1>
      <br />
      <p className="lead">{post.content}</p>
      <p>
        Author:
        <span className="badge" style={{ color: "black" }}>
          {post.user}
        </span>{" "}
        Published on:
        <span className="badge" style={{ color: "black" }}>
          {new Date(post.createdAt).toLocaleString()}
        </span>
      </p>
      <div>
        <Link
          to={`/post/update/${post.slug}`}
          className="btn btn-sm btn-outline-warning"
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;
