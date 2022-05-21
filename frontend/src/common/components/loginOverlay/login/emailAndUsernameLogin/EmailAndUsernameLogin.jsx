import React, { useState } from "react";
import "./styles.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUserState } from "../../../../../providers/UserProvider";
import { useAppState } from "../../../../../providers/AppProvider";

const EmailAndUsernameLogin = ({ setLoginType }) => {
  // user state
  const { userDispatch } = useUserState();

  // user state
  const { appDispatch } = useAppState();

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    emailOrUsername: "",
    password: "",
  });

  // Show or hide password
  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle form change
  const handleChange = (e, type) => {
    setForm((prev) => ({ ...prev, [type]: e.target.value }));
  };

  // On users attempt to login
  const handleLogin = (e) => {
    e.preventDefault();

    // Ensure the is a valid password
    if (form.password) {
      // Login
      const auth = getAuth();

      signInWithEmailAndPassword(auth, form.emailOrUsername, form.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          userDispatch({ type: "LOGIN", payload: { user } });
          // ...
          appDispatch({ type: "CLOSE_OVERLAY" });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log({ errorCode, errorMessage });
        });
    } else {
      setError("Incorrect account or password");
    }
  };

  return (
    <form className="loginOptions__login__emailUsername" onSubmit={handleLogin}>
      {/* Login with email or username intro */}
      <div className="login__phoneLoginOptions">
        <span className="login__phoneLoginOption">Email or Username</span>
        <span
          className="login__phoneLoginOption login__phoneLoginOptionsAlt"
          onClick={() => setLoginType("phone")}
        >
          Log in with phone
        </span>
      </div>

      {/* Email input field */}
      <input
        type="text"
        className="emailUsernameLogin__input"
        placeholder="Email or Username"
        autoComplete="username"
        value={form.emailOrUsername}
        onChange={(e) => handleChange(e, "emailOrUsername")}
      />
      {/* Password text field */}
      <div
        className={`${error && "error"} emailUsernameLogin__passwordContainer`}
      >
        {/* Input */}
        <input
          type={showPassword ? "text" : "password"}
          className="emailUsernameLogin__passwordInput"
          placeholder="Password"
          autoComplete="current-password"
          value={form.password}
          onChange={(e) => handleChange(e, "password")}
        />

        {/* Error icon */}
        {error && (
          <WarningAmberIcon
            sx={{ marginRight: "10px", color: "red" }}
            fontSize="small"
          />
        )}

        {/* see/hide password */}
        {showPassword ? (
          <VisibilityIcon
            sx={{ marginRight: "10px", color: "gray", cursor: "pointer" }}
            fontSize="small"
            onClick={handlePasswordVisibility}
          />
        ) : (
          <VisibilityOffIcon
            sx={{ marginRight: "10px", color: "gray", cursor: "pointer" }}
            fontSize="small"
            onClick={handlePasswordVisibility}
          />
        )}
      </div>
      {/* Error text */}
      {error && <span className="errorText">{error}</span>}

      {/* Forgot password help  */}
      <strong className="forgotPassword">Forgot Password?</strong>

      {/* Login button */}
      <button
        className={
          form.emailOrUsername && form.password
            ? "loginButton"
            : "loginButtonDisabled"
        }
      >
        Log in
      </button>
    </form>
  );
};

export default EmailAndUsernameLogin;
