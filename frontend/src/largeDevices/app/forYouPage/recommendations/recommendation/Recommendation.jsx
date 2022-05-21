import React from "react";
import "./styles.css";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import VideoPlayer from "../../../../../common/components/videoPlayer/VideoPlayer";

const Recommendation = ({ img, tiktokName, username, description, sound }) => {
  return (
    <div className="recommendation">
      <div className="recommendation__details">
        {/* Avatar */}
        <div className="recommendation__avatar">
          <img src={img} alt={tiktokName} />
        </div>

        <div className="recommendation__infoAndVideo">
          <div className="recommendation__infoAndCta">
            <div className="recommendation__namesAndDescription">
              {/* Names */}
              <div className="recommendation__names">
                <span className="recommendation__tiktokName">{tiktokName}</span>
                <span className="recommendation__username">{username}</span>
              </div>

              {/* Captions - some text */}
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="recommendation__description"
              />

              <span className="recommendation__sound">
                {<AudiotrackIcon fontSize="small" />}
                {sound}
              </span>
            </div>

            <button className="recommendation__followButton">Follow</button>
          </div>

          {/* Video Player Div */}
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
