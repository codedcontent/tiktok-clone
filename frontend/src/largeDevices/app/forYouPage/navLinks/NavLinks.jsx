import React from "react";
import "./styles.css";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

const NavLinks = () => {
  return (
    <div className="navLinks">
      {/* For You */}

      <Link to="/">
        <div className="navLink__wrapper navLink__active">
          {/* Nav Icon */}
          <HomeIcon sx={{ fontSize: "33px" }} />

          {/* Nav Text */}
          <h3>For You</h3>
        </div>
      </Link>

      {/* Following */}
      <Link to="/">
        <div className="navLink__wrapper">
          {/* Nav Icon */}
          <PeopleIcon sx={{ fontSize: "33px" }} />

          {/* Nav Text */}
          <h3>Following</h3>
        </div>
      </Link>

      {/* For You */}
      <Link to="/">
        <div className="navLink__wrapper">
          {/* Nav Icon */}
          <OndemandVideoIcon sx={{ fontSize: "33px" }} />

          {/* Nav Text */}
          <h3>Live</h3>
        </div>
      </Link>
    </div>
  );
};

export default NavLinks;
