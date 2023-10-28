import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import "./css/custom-row-note.css";

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

  return (
    <div className="container pb-5">
      <Navigation />
      <br />
      <h1>Meeting Notes</h1>
      <br />
      {posts.map((post, i) => (
        <div className="row custom-row" key={post._id}>
          <div className="col pt-1 pb-2">
            <h3>{post.title}</h3>
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
        </div>
      ))}
    </div>
  );
};

export default App;
