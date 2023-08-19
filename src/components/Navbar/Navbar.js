// import React from 'react'
import { React } from "react-router-dom";
import "./Navbar.css";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav">
      <h1 className="nav-title">Pantiket</h1>
      <button className="btn" type="button">
        Confirm ticket
      </button>
    </div>

    </nav>
    
  );
}

export default Navbar;
