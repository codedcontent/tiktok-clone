import React, { useRef, useState } from "react";
import "./styles.css";
import testVideo from "../../../assets/videos/new test vid.mp4";
import DownloadIcon from "@mui/icons-material/Download";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import PauseIcon from "@mui/icons-material/Pause";
import VideoOptions from "./../../../largeDevices/app/forYouPage/recommendations/recommendation/videoOptions/VideoOptions";

const VideoPlayer = () => {
  // Reference to the video
  const videoRef = useRef();
  // Reference to the progress bar range
  const progressBarRangeRef = useRef();

  const [isHoveredUpon, setIsHoveredUpon] = useState(false);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const [progressBarPosition, setProgressBarPosition] = useState("0%");
  const [progressBarIsClicked, setProgressBarIsClicked] = useState(false);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  // Tells if the video is ready to play
  const [videoReadyToPlay, setVideoReadyToPlay] = useState(false);

  // Function to handle video play or pause
  const handleVideoPlay = () => {
    // Check video state
    if (!videoIsPlaying) {
      videoRef.current.play();
      setVideoIsPlaying(true);
    } else {
      videoRef.current.pause();
      setVideoIsPlaying(false);
    }
  };

  // Function to handle video time update - the video is currently playing
  const handleTimeUpdate = () => {
    const videoCurrentTime =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;

    // Set the progress bar
    setProgressBarPosition(`${videoCurrentTime}%`);
  };

  // Function to run when the user clicks on a position in the videos progress bar
  const handleProgressRangeClick = (e) => {
    // This is the horizontal coordinate from the start of the element that was clicked on
    const offsetFromProgressStart = e.nativeEvent.offsetX;

    // This is the width of the entire element that was clicked - padding, border and scrollbar included
    const offsetOfEntireElement = e.target.offsetWidth;

    const newProgressPosition = offsetFromProgressStart / offsetOfEntireElement;

    // Set the progress bars new position
    setProgressBarPosition(`${newProgressPosition * 100}%`);

    // Set the new video time
    videoRef.current.currentTime =
      newProgressPosition * videoRef.current.duration;
  };

  // When the user mouses down on the progress bar
  const handleMouseDown = (e) => {
    // Store the width of the progress bar range
    const offsetOfEntireElement = e.target.offsetWidth;
    setProgressBarWidth(offsetOfEntireElement);
    setProgressBarIsClicked(true);
  };

  // When the user mouses up on the progress bar
  const handleMouseUp = () => {
    setProgressBarIsClicked(false);
  };

  // Handle mouse drag on the videos progress bar
  const handleMouseDrag = (e) => {
    const ele = progressBarRangeRef.current;

    const progressBarRectX = ele.getBoundingClientRect().x;
    const mouseXPosition = e.clientX;

    const mouseMovement = mouseXPosition - progressBarRectX;

    if (mouseMovement <= progressBarWidth) {
      // Set the progress bars new position
      setProgressBarPosition(`${(mouseMovement / progressBarWidth) * 100}%`);

      // Set the new video time
      videoRef.current.currentTime =
        (mouseMovement / progressBarWidth) * videoRef.current.duration;
    }
  };

  // When the user moves their mouse along while already in mouse down state
  const handleMouseMove = (e) => {
    if (!progressBarIsClicked) return;

    handleMouseDrag(e);
  };

  // The mouse leaves the progress bar
  const handleMouseLeave = () => {
    // setProgressBarIsClicked(false);
  };

  // Handle what happens when the video is ready to play
  const handleVideoCanPlay = () => {
    setVideoReadyToPlay(true);
  };

  return (
    <div className="videoPlayer">
      <div
        className="videoPlayer__player"
        onMouseOver={() => {
          setIsHoveredUpon(true);
        }}
        onMouseLeave={() => {
          setIsHoveredUpon(false);
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Video element */}
        <video
          src={testVideo}
          className="videoPlayer__video"
          playsInline
          loop={true}
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          onCanPlay={handleVideoCanPlay}
        ></video>

        {/* options */}
        <div
          className={`videoPlayer__options ${
            !isHoveredUpon ? "videoPlayer__optionHide" : ""
          }`}
        >
          {/* Download button */}
          <div className="videoPlayer__downloadVideo">
            <DownloadIcon sx={{ fontSize: "20px" }} />
          </div>

          {/* Report */}
          <div className="videoPlayer__reportVideo">
            <EmojiFlagsIcon />

            <span>Report</span>
          </div>

          {/* Play button */}
          <div className="videoPlayer__playButton" onClick={handleVideoPlay}>
            {!videoIsPlaying ? <PlayArrowIcon /> : <PauseIcon />}
          </div>

          {/* Audio button */}
          <div className="videoPlayer__volume">
            <VolumeUpIcon />
          </div>

          <div className="videoPlayer__videoSeeker">
            {/* Video seeker */}
            <div
              id="trackingId"
              className="videoPlayer__progressBarRange"
              onClick={handleProgressRangeClick}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              ref={progressBarRangeRef}
            >
              <div
                className="videoPlayer__progressBar"
                style={{ width: progressBarPosition }}
              >
                <span className="videoPlayer__progressBarSeeker"></span>
              </div>
            </div>

            {/* Video time */}
            <span className="videoPlayer__timeDuration">00:00/00:00</span>
          </div>
        </div>
      </div>

      {/* Video options - Liking, sharing, commenting and others */}
      {videoReadyToPlay && (
        <VideoOptions
          likes={50000}
          comments={5000}
          shares={400}
          isLiked={true}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
