import React, { useState } from "react";
import "./styles.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import CodeIcon from "@mui/icons-material/Code";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkIcon from "@mui/icons-material/Link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TelegramIcon from "@mui/icons-material/Telegram";
import { numify } from "numify";
import { useUserState } from "../../../../../../providers/UserProvider";
import { useAppState } from "../../../../../../providers/AppProvider";

const VideoOptions = ({ likes, comments, shares, isLiked }) => {
  const [hideMoreShareOptions, setHideMoreShareOptions] = useState(true);

  const [videoData, setVideoData] = useState({ isLiked: isLiked });

  const {
    user: { isLoggedIn },
  } = useUserState();

  const { appDispatch } = useAppState();

  // Show more sharing options
  const showMoreOptions = () => {
    setHideMoreShareOptions(false);
  };

  // Handle what happens when the user hovers away from the share options
  const handleShareOptionsMouseLeave = () => {
    setHideMoreShareOptions(true);
  };

  // Like or unlike a value
  const handleLikeClick = () => {
    if (isLoggedIn) {
      // Do some db stuff here

      // If successful then like or unlike
      setVideoData((prev) => ({ ...prev, isLiked: !prev.isLiked }));
    } else {
      // User should log in
      appDispatch({ type: "OPEN_OVERLAY" });
      // dispatch({ type: "LIKE_VIDEO" });
    }
  };

  return (
    <div className="videoOptions">
      {/* Like icon */}
      <div className="videoOptions__wrapper">
        <div className="videoOptions__icon" onClick={handleLikeClick}>
          <FavoriteIcon
            sx={{ color: `${videoData.isLiked ? "rgba(254, 44, 85, 1)" : ""}` }}
          />
        </div>

        <span className="videoOptions__optionsCount">{numify(likes)}</span>
      </div>

      {/* Comment icon */}
      <div className="videoOptions__wrapper">
        <div className="videoOptions__icon">
          <CommentIcon />
        </div>

        <span className="videoOptions__optionsCount">{numify(comments)}</span>
      </div>

      {/* Share icon */}
      <div className="videoOptions__wrapper videoOptions__shareIcon">
        <div className="videoOptions__icon">
          <ShareIcon />
        </div>

        <span className="videoOptions__optionsCount">{numify(shares)}</span>

        {/* Share options */}
        <div
          className="videoOptions__shareOptions"
          onMouseLeave={handleShareOptionsMouseLeave}
        >
          <div className="shareOptions__option">
            <CodeIcon sx={{ color: "rgb(55, 55, 55)" }} />
            <span>Embed</span>
          </div>

          <div className="shareOptions__option">
            <SendIcon sx={{ color: "rgba(254, 44, 85, 1)" }} />
            <span>Send to friends</span>
          </div>

          <div className="shareOptions__option">
            <WhatsAppIcon sx={{ color: "#25D366" }} />
            <span>Share to WhatsApp</span>
          </div>

          <div className="shareOptions__option">
            <FacebookOutlinedIcon sx={{ color: "#4267B2" }} />
            <span>Share to Facebook</span>
          </div>

          <div className="shareOptions__option">
            <LinkIcon sx={{ color: "rgba(254, 44, 85, 1)" }} />
            <span>Copy Link</span>
          </div>

          {!hideMoreShareOptions && (
            <>
              <div className="shareOptions__option">
                <TwitterIcon sx={{ color: "	#1DA1F2" }} />
                <span>Share on Twitter</span>
              </div>

              <div className="shareOptions__option">
                <TelegramIcon sx={{ color: "dodgerblue" }} />
                <span>Share on Telegram</span>
              </div>

              <div className="shareOptions__option">
                <PinterestIcon sx={{ color: "	#E60023" }} />
                <span>Share on Pinterest</span>
              </div>
            </>
          )}

          {hideMoreShareOptions && (
            <div className="shareOptions__showMore" onClick={showMoreOptions}>
              <KeyboardArrowDownIcon fontSize="large" />
            </div>
          )}

          <span className="shareOptions__triangle"></span>
        </div>
      </div>
    </div>
  );
};

export default VideoOptions;
