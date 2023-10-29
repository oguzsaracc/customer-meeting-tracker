import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import "./css/custom-row-record.css";

import { Link } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then((response) => {
        //console.log(response);
        setPosts(response.data);
      })
      .catch((error) => alert("Error due to fetch customer notes"));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const removeConfirm = (slug) => {
    let removeConfirmAnswer = window.confirm(
      "Are you sure you want to delete? This action cannot be undone"
    );
    if (removeConfirmAnswer) {
      removeItem(slug);
    }
  };

  const removeItem = (slug) => {
    axios
      .delete(`${process.env.REACT_APP_API}/post/${slug}`)
      .then((response) => {
        alert(response.data.message);
        fetchPosts();
      })
      .catch((error) => alert("Error due to delete customer record"));
  };

  return (
    <div className="container pb-5">
      <Navigation />
      <br />
      <h1>Meeting Notes</h1>
      <br />
      {posts.map((post, i) => (
        <div className="row custom-row" key={post._id}>
          <div className="col pt-1 pb-2">
            <div className="row">
              <div className="col-md-10">
                <Link to={`/post/${post.slug}`}>
                  <h3>{post.title}</h3>
                </Link>
                <p className="lead">{post.content.substring(0, 110)}</p>
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
              </div>

              <div className="col-md-2">
                <Link
                  to={`/post/update/${post.slug}`}
                  className="btn btn-sm btn-outline-warning"
                >
                  Update
                </Link>
                <button
                  onClick={() => removeConfirm(post.slug)}
                  className="btn btn-sm btn-outline-danger m-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
