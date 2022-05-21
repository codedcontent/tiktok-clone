import React, { useState } from "react";
import "./styles.css";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import PersonIcon from "@mui/icons-material/Person";
import AppleIcon from "@mui/icons-material/Apple";
import CloseIcon from "@mui/icons-material/Close";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useAppState } from "../../../providers/AppProvider";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import QRCode from "./QRCode/QRCode";
import { KeyboardArrowLeft } from "@mui/icons-material";
import Login from "./login/Login";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const loginOption = [
  {
    text: "Use QR code",
    icon: <QrCodeScannerIcon />,
    loginOnly: "true",
  },
  {
    text: "Use phone / email / username",
    icon: <PersonIcon />,
  },
  {
    text: "Continue with Facebook",
    icon: <FacebookOutlinedIcon sx={{ color: "dodgerblue" }} />,
  },
  {
    text: "Continue with Google",
    icon: <GoogleIcon />,
  },
  {
    text: "Continue with Twitter",
    icon: <TwitterIcon sx={{ color: "dodgerblue" }} />,
  },
  {
    text: "Continue with Apple",
    icon: <AppleIcon />,
    loginOnly: "true",
  },
  {
    text: "Continue with Instagram",
    icon: <InstagramIcon />,
    loginOnly: "true",
  },
];

const LoginOverlay = () => {
  // State of the current login options
  const [currentLoginOption, setCurrentLoginOption] = useState(null);

  // Is the user trying to login or sign up
  const [loginOrCreateAccount, setLoginOrCreateAccount] = useState("login");

  // app state context
  const { appDispatch } = useAppState();

  // Function to close overlay
  const closeOverlay = () => {
    // Send a dispatch to close overlay
    appDispatch({ type: "CLOSE_OVERLAY" });
  };

  // Handle option click
  const handleLoginOptionClick = (index) => {
    if (index === 0 || index === 1) {
      setCurrentLoginOption(index);
    }

    // Facebook auth
    if (index === 2) {
      alert(
        "Sorry, we don't support that right now because Facebook is being a bitch right now! "
      );
    }

    // Google auth
    if (index === 3) {
      authWithGoogle();
    }

    // Twitter auth
    if (index === 4) {
      alert("Sorry, we don't support that right now ");
    }

    // Twitter auth
    if (index === 5) {
      alert("Sorry, we don't support that right now ");
    }

    // Twitter auth
    if (index === 6) {
      alert("Sorry, we don't support that right now ");
    }
  };

  // Authentication with Google
  const authWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log({ user });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        console.log({ errorCode, errorMessage });
        // ...
      });
  };

  return (
    <div className="loginOverlay">
      {/* Close Icon */}
      <span className="loginOverlay__close" onClick={closeOverlay}>
        <CloseIcon />
      </span>

      {currentLoginOption !== null && (
        // Close Icon
        <span
          className="loginOverlay__back"
          onClick={() => setCurrentLoginOption(null)}
        >
          <KeyboardArrowLeft />
        </span>
      )}

      {/* QR code */}
      {currentLoginOption === 0 && <QRCode />}

      {/* Phone number, email, username */}
      {currentLoginOption === 1 && <Login purpose={loginOrCreateAccount} />}

      {currentLoginOption === null && (
        <div className="loginOverlay__loginOptions">
          <p className="loginOverlay__loginText">Log in to TikTok</p>
          {loginOption.map((option, index) => {
            if (loginOrCreateAccount !== "login") {
              if (!option.loginOnly) {
                return (
                  <div
                    className="loginOption"
                    key={index}
                    onClick={() => handleLoginOptionClick(index)}
                  >
                    <div className="loginOption__icon">{option.icon}</div>

                    <span className="loginOption__text">{option.text}</span>
                  </div>
                );
              }
            } else {
              return (
                <div
                  className="loginOption"
                  key={index}
                  onClick={() => handleLoginOptionClick(index)}
                >
                  <div className="loginOption__icon">{option.icon}</div>

                  <span className="loginOption__text">{option.text}</span>
                </div>
              );
            }
          })}
        </div>
      )}

      <div className="loginOverlay__noAccount">
        <p className="loginOverlay__noAccountText">
          Don't have an account?{" "}
          <span
            className="loginOverlay__signUp"
            onClick={() => {
              setLoginOrCreateAccount((prev) =>
                prev === "login" ? "create" : "login"
              );

              // Reset the current login/sign up options
              setCurrentLoginOption(null);
            }}
          >
            {loginOrCreateAccount === "login" ? "Sign up" : "Log in"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginOverlay;
