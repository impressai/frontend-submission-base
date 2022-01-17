import React from "react";
import { NavLink } from "react-router-dom";

import "./header.styles.scss";

const Header = (props) => {
  return (
    <div className="header">
      <div className="options">
        <NavLink
          className="option"
          to="/create-resume"
          activeClassName="active-link"
          isActive={(match, location) => {
            if (!location) return false;
            const { pathname } = location;
            return pathname === "/" || pathname === "/create-resume";
          }}
        >
          Create Resume
        </NavLink>
        <NavLink className="option" to="/resumes" activeClassName="active-link">
          View Resumes
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
