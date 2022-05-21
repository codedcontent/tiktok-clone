import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="largeApp__header">
      <div className="header__wrapper">
        {/* App header image */}
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
            alt="TIKTOK CLONE"
            className="largeApp__headerImg"
          />
        </Link>

        {/* Search bar */}
        <div className="header__searchContainer">
          <input type="text" placeholder="Search accounts and videos" />

          <span className="searchLoader"></span>

          <span className="header__searchContainerDivider"></span>

          <SearchIcon
            sx={{ color: "rgba(22, 24, 35, 0.34)", marginLeft: "5px" }}
          />
        </div>

        {/* CTA buttons */}
        <div className="header__ctaButtons">
          <button className="header__uploadButton">Upload</button>
          <button className="header__loginButton">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
