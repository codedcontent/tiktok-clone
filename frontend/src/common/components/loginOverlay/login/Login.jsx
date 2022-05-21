import React, { useState } from "react";
import "./styles.css";
import PhoneLogin from "./phoneLogin/PhoneLogin";
import EmailAndUsernameLogin from "./emailAndUsernameLogin/EmailAndUsernameLogin";
import SignUp from "../signUp/SignUp";

const Login = ({ purpose }) => {
  console.log(purpose);

  const [loginType, setLoginType] = useState("phone");

  return (
    <div className="loginOptions__login">
      <span className="loginOverlay__loginText">
        {purpose === "login" ? "Log In" : "Sign Up"}
      </span>

      {loginType === "phone" ? (
        <>
          {purpose === "login" ? (
            <PhoneLogin setLoginType={setLoginType} />
          ) : (
            <SignUp />
          )}
        </>
      ) : (
        <EmailAndUsernameLogin setLoginType={setLoginType} />
      )}
    </div>
  );
};

export default Login;
