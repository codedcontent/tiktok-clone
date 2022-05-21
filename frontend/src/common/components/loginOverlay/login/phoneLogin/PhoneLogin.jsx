import React, { useState, useEffect, useRef } from "react";
import countryCodes from "../../../../../constants/countryCodes";
import "./styles.css";
import tiktokLoader from "../../../../../assets/svg/Dual Ball-0.8s-100px.svg";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  SearchRounded,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const PhoneLogin = ({ setLoginType }) => {
  // Country code the user has selected
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);

  const [errors, setErrors] = useState({
    number: "Enter a valid number",
    sixDigitCode: "Verification failed, resend code and try again",
  });

  // Results for the country code searches
  const [countryCodesSearchResult, setCountryCodesSearchResult] =
    useState(null);

  // Search input state
  const [searchValue, setSearchValue] = useState("");

  // State of if the wants to select country codes
  const [showCountryOptions, setShowCountryOptions] = useState(false);

  // Ref to use to forces useEffect to behave and run only once
  const searchWatchRef = useRef(0);

  // phone number value
  const [phoneNumber, setPhoneNumber] = useState("");

  // 6 digit code value
  const [sixDigitCode, setSixDigitCode] = useState("");

  // useEffect to properly set the possible device country code
  useEffect(() => {
    setSelectedCountryCode(countryCodes[157]);
  }, []);

  // useEffect to perform country code search
  useEffect(() => {
    if (searchWatchRef.current > 1) {
      setCountryCodesSearchResult(
        countryCodes.filter(
          (countryData) =>
            countryData.code
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            countryData.dial_code.includes(searchValue.toLowerCase()) ||
            countryData.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }

    searchWatchRef.current += 1;
  }, [searchValue]);

  // Function to select the country code the user has clicked on
  const selectThisCountryCode = (countryData) => {
    setSelectedCountryCode(countryData);
    setShowCountryOptions(false);
  };

  // Function to split the string we searched for from the whole text
  const spitSearchResult = (fullText) => {
    // TODO: Use my own code - these bitches can't ever give me what i want
    const regex = new RegExp(`(${searchValue})`, "gi");
    const searchedTextListResult = fullText.split(regex);

    const result = searchedTextListResult.map((res) =>
      res.toLowerCase() === searchValue.toLowerCase()
        ? { textName: res, isSearched: true }
        : { textName: res, isSearched: false }
    );

    return result;
  };

  // Handle phoneNumber change event
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Handle 6 DigitCode change event
  const handle6DigitCodeChange = (e) => {
    setSixDigitCode(e.target.value);
  };

  return (
    <div className="loginOptions__login__phoneLogin">
      {/* Intro */}
      <div className="login__phoneLoginOptions">
        <span className="login__phoneLoginOption">Phone</span>
        <span
          className="login__phoneLoginOption login__phoneLoginOptionsAlt"
          onClick={() => setLoginType("email_username")}
        >
          Log in with email and password
        </span>
      </div>

      {/* Phone number input */}
      <div className={`login__numberWrapper ${errors.number && "error"}`}>
        {/* Country code */}
        <div
          className="login__countryCodes"
          onClick={() => setShowCountryOptions((prev) => !prev)}
        >
          {!selectedCountryCode ? (
            <img src={tiktokLoader} alt="loader" />
          ) : (
            <div className="countryCode">
              {/* country short code */}
              <span className="code">{selectedCountryCode.code}</span>

              {/* dial code */}
              <span className="dialCode">{selectedCountryCode.dial_code}</span>

              {/* Down arrow */}
              {showCountryOptions ? (
                <KeyboardArrowUp fontSize="small" />
              ) : (
                <KeyboardArrowDown fontSize="small" />
              )}
            </div>
          )}
        </div>

        {/* Phone number */}
        <input
          type="text"
          className="login__phoneNumber"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />

        {errors.number && (
          <WarningAmberIcon
            sx={{ color: "red", marginRight: "10px" }}
            fontSize="small"
          />
        )}

        {/* Country Code Options */}
        {showCountryOptions && (
          <ClickAwayListener onClickAway={() => setShowCountryOptions(false)}>
            <div className="phoneLogin__countryCodeOptions">
              <div className="countryCodeOptions__searchContainer">
                <SearchRounded />

                <input
                  type="text"
                  className="countryCodeOptions__searchInput"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                />
              </div>

              {countryCodesSearchResult !== null && searchValue !== "" ? (
                <>
                  {countryCodesSearchResult.map((countryCode, index) => (
                    <div
                      className="countryCodeDataContainer"
                      key={index}
                      onClick={() => selectThisCountryCode(countryCode)}
                    >
                      {/* <span className={searchValue.includes(countryCode)}>
                        {countryCode.name}
                      </span>

                      <span className="dial_code">{countryCode.dial_code}</span> */}

                      {spitSearchResult(
                        `${countryCode.name} ${countryCode.dial_code}`
                      ).map((res) => (
                        <span
                          className={
                            res.isSearched ? "countryCodeSearchParam" : ""
                          }
                        >
                          {res.textName}
                        </span>
                      ))}
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {countryCodes.map((countryData, index) => (
                    <div
                      className="countryCodeDataContainer"
                      key={index}
                      onClick={() => selectThisCountryCode(countryData)}
                    >
                      <span className="country">{countryData.name}</span>

                      <span className="dial_code">{countryData.dial_code}</span>
                    </div>
                  ))}
                </>
              )}
            </div>
          </ClickAwayListener>
        )}
      </div>

      {/* Error text */}
      <span className="errorText">{errors.number}</span>

      {/* 6-digit code input */}
      <div className={`login__6DigitCode ${errors.sixDigitCode && "error"}`}>
        <input
          type="text"
          className="login__6DigitInput"
          placeholder="Enter 6-digit code"
          value={sixDigitCode}
          onChange={handle6DigitCodeChange}
        />

        {errors.sixDigitCode && (
          <WarningAmberIcon
            sx={{ color: "red", marginRight: "10px" }}
            fontSize="small"
          />
        )}

        <button
          className={
            phoneNumber ? "login__gDigitSend" : "login__gDigitSendDisabled"
          }
        >
          Send Code
        </button>
      </div>

      {/* Error text */}
      <span className="errorText">{errors.sixDigitCode}</span>

      {/* To login with password */}
      <p className="passwordLoginOpt">Log in with password</p>

      <button
        className={
          sixDigitCode.length === 6 && phoneNumber
            ? "login__loginButton"
            : "login__loginButtonDisabled"
        }
      >
        Log in
      </button>
    </div>
  );
};

export default PhoneLogin;
