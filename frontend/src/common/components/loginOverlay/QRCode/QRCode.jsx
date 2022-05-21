import React from "react";
import "./styles.css";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const QRCode = () => {
  return (
    <div className="loginOption__QRCode">
      <div className="loginOverlay__loginText">Log in with QRCode</div>

      <QrCodeScannerIcon sx={{ fontSize: "9em" }} />

      <ol className="QRCode__steps">
        <li>
          Open the TikTok app on you mobile device and tap{" "}
          <strong>Discover</strong>
        </li>
        <li>
          Tap
          <strong>[-]</strong> and scan the QR code
        </li>
        <li>Confirm your login on your mobile device</li>
      </ol>

      <i class="fa-solid fa-circle-info"></i>

      <span className="QRCode__help">
        <HelpOutlineOutlinedIcon fontSize="small" sx={{ fontSize: "16px" }} />{" "}
        See How
      </span>
    </div>
  );
};

export default QRCode;
