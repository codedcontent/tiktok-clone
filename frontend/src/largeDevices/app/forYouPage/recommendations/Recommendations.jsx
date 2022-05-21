import React from "react";
import "./styles.css";
import Recommendation from "./recommendation/Recommendation";

const Recommendations = () => {
  return (
    <div className="recommendations">
      <Recommendation
        img={"https://randomuser.me/api/portraits/women/72.jpg"}
        tiktokName="__firstNameLastName"
        username="__firstName __LastName"
        description={`
            <a href="/@username" class="userLink">
              <strong class="userLink__strong">@username</strong>
            </a>
          <span class="">says to checkout</span>
          <a href="/tag/tiktokclone" class="userLink">
            <strong class="userLink__strong">#tiktokClone</strong>
          </a>
          <span>by</span>
          <a href="/@username" class="userLink">
            <strong class="userLink__strong">@i.am.meph</strong>
          </a>
        `}
        sound={"Original sound - Bayo.beats"}
      />
    </div>
  );
};

export default Recommendations;
