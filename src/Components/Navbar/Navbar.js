import React from "react";
import "../../App.css";
import { FaBars } from "react-icons/fa";
import Search from "../Search/index";
function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">Logo</div>
        <ul className="box">
          <li className="list">
            <a className="tags" href="../Home/index.js">
              Home
            </a>
          </li>
          <li className="list">
            <a className="tags" href="../About/Index.js">
              About
            </a>
          </li>
          <li className="list">
            <a className="tags" href={Search}>
              Team
            </a>
          </li>
          <li className="list">
            <a className="tags" href="../Search/index.js">
              Search
            </a>
          </li>
        </ul>
        <div className="Bars">
          <FaBars />
        </div>
        <div className="profile">profile</div>
      </div>
    </nav>
  );
}

export default Navbar;
