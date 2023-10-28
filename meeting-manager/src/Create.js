import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [state, setState] = useState({
    // The empty states that we created for the data that we will receive from the user.
    title: "",
    content: "",
    user: "",
  });

  // Destructring the values from the states for simpler implementation in value.
  const { title, content, user } = state;

  // Creating a onChange to create an event handler for input changes.
  const handleChange = (name) => (event) => {
    // console.log("name", name, "event", event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  // Creating a handler.
  const handleSubmit = (event) => {
    event.preventDefault(); // This method is prevent the page reload if the user press the button.
    // console.table({ title, content, user });
    axios
      .post(`${process.env.REACT_APP_API}/post`, { title, content, user })
      .then((response) => {
        console.log(response);
        // If success, we should clear out the field in the form.
        setState({ ...state, title: "", content: "", user: "" });
        // We have to notify the user as well due to process finished sucessfully.
        alert(
          `Customer title '${response.data.title}' is created successfully`
        );
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };

  return (
    <div className="container p-5">
      <h1>Create Customer Meeting Notes</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Customer Title</label>
          <input
            onChange={handleChange("title")}
            value={title}
            type="text"
            className="form-control"
            placeholder="Please enter customer's title"
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
            placeholder="Please enter customer's details"
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
            placeholder="Please enter your name"
            required
          />
        </div>
        <br />
        <div>
          <button className="btn btn-primary">Create Note</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
