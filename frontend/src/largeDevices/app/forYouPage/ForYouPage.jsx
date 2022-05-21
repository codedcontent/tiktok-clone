import React from "react";
import "./styles.css";
import NavLinks from "./navLinks/NavLinks";
import SuggestedAccounts from "./suggestedAccounts/SuggestedAccounts";
import Discover from "./discover/Discover";
import Footer from "./footer/Footer";
import Recommendations from "./recommendations/Recommendations";

const ForYouPage = () => {
  return (
    <div className="forYouPage">
      {/* Side Navigation */}
      <div className="forYouPage__sideNav">
        {/* Nav links */}
        <NavLinks />

        {/* CTA */}
        <div className="forYouPage__cta">
          <p>Log in to follow creators, like videos, and view comments.</p>

          <button>Log in</button>
        </div>

        {/* Suggested Profiles */}
        <div className="forYouPage__suggestedProfiles">
          <h4>Suggested Account</h4>

          <div className="forYouPage__suggestedAccounts">
            <SuggestedAccounts />
          </div>
        </div>

        {/* Discover */}
        <Discover />

        {/* Footer */}
        <Footer />
      </div>

      {/* Recommendations */}
      <Recommendations />
    </div>
  );
};

export default ForYouPage;
