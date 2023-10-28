import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const Update = (props) => {
  const [state, setState] = useState({
    title: "",
    content: "",
    slug: "",
    user: "",
  });

  const { title, content, slug, user } = state;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
      .then((response) => {
        const { title, content, slug, user } = response.data;
        setState({ title, content, slug, user });
      })
      .catch((error) => alert("Error due to load single customer note"));
  }, [props.match.params.slug]);

  // Creating a onChange to create an event handler for input changes.
  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  // Creating a handler.
  const handleSubmit = (event) => {
    event.preventDefault(); // This method is prevent the page reload if the user press the button.
    // console.table({ title, content, user });
    axios
      .put(`${process.env.REACT_APP_API}/post/${slug}`, {
        title,
        content,
        user,
      })
      .then((response) => {
        console.log(response);
        const { title, content, slug, user } = response.data;
        setState({ ...state, title, content, slug, user });
        // We have to notify the user as well due to process finished sucessfully.
        alert(`Customer record '${title}' is updated successfully`);
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };

  const displayUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted">Customer Title</label>
        <input
          onChange={handleChange("title")}
          value={title}
          type="text"
          className="form-control"
          required
        />
      </div>
      <br />
      <div className="form-group">
        <label className="text-muted">Customer details</label>
        <textarea
          onChange={handleChange("content")}
          value={content}
          type="text"
          className="form-control"
          required
        />
      </div>
      <br />
      <div className="form-group">
        <label className="text-muted">Employee's name</label>
        <input
          onChange={handleChange("user")}
          value={user}
          type="text"
          className="form-control"
          required
        />
      </div>
      <br />
      <div>
        <button className="btn btn-primary">Update</button>
      </div>
    </form>
  );

  return (
    <div className="container pb-5">
      <Navigation />
      <br />
      <h1>Update Meeting Post</h1>
      <br />
      {displayUpdateForm()}
    </div>
  );
};

export default Update;
