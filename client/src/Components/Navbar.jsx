import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
