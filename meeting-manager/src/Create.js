import React from "react";

const Create = () => (
  <div className="container p-5">
    <h1>Create Customer Meeting Notes</h1>
    <br />
    <form>
      <div className="form-group">
        <label className="text-muted">Customer Title</label>
        <input
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
          type="text"
          className="form-control"
          placeholder="Please enter customer's details"
          required
        />
      </div>
      <br />
      <div className="form-group">
        <label className="text-muted">User</label>
        <input
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

export default Create;
