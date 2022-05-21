import React from "react";
import TagIcon from "@mui/icons-material/Tag";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import "./styles.css";

const discoveryTags = [
  { name: "fitnesstok", type: "hastag" },
  { name: "naijafoodie", type: "hastag" },
  { name: "africanfootball", type: "hastag" },
  { name: "Kpoclè Acte 2 IVK - Ivoriankid", type: "sound" },
  { name: "Buga - Kizz Daniel & Tekno", type: "sound" },
  { name: "Nobody (TikTok) - Boy Spyce", type: "sound" },
  { name: "hairtutorial", type: "hastag" },
  { name: "Cubana - Joeboy", type: "sound" },
  { name: "My Man - Tiktok - Yemi Alade", type: "hastag" },
];

const Discover = () => {
  return (
    <div className="discover">
      <h4>Discover</h4>

      <div className="discover__tags">
        {discoveryTags.map((tag, index) => (
          <div key={index} className="discover__tagWrapper">
            {/* Icon */}
            {tag.type === "sound" ? (
              <AudiotrackIcon fontSize="small" />
            ) : (
              <TagIcon fontSize="small" />
            )}

            <span>{tag.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
