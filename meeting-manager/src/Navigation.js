import React from "react";
import { Link } from "react-router-dom";

// Link will let us to rende different components based on the link that user will access.
const Navigation = () => (
  <nav>
    <ul className="nav nav-tabs">
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/create">Create Note</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
