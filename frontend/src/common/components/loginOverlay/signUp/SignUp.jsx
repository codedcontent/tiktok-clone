import React from "react";
import "./styles.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = Array(31)
  .fill(1)
  .map((x, y) => x + y);

const generateYears = () => {
  let years = [];

  const currentYear = new Date().getFullYear();
  let countYear = 1900;

  while (countYear !== currentYear) {
    countYear += 1;
    years.push(countYear);
  }

  return years;
};

const years = generateYears();

const SignUp = () => {
  return (
    <div className="phoneDetails__signUp">
      <strong>When's your birthday?</strong>

      <div className="birthdaySelectContainer">
        {/* Month */}
        <select name="Month">
          <option value="Month">Month</option>
          {months.map((month, i) => (
            <option key={i} value={month}>
              {month}
            </option>
          ))}
        </select>

        {/* Day */}
        <select>
          <option value="Day">Day</option>
          {days.map((day, i) => (
            <option value={day} key={i}>
              {day}
            </option>
          ))}
        </select>

        {/* Year */}
        <select>
          <option value="year">Year</option>
          {years.map((year, i) => (
            <option value={year} key={i}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Birthday publicity info*/}
      <p className="publicityInfo">Your birthday won't be show publicly</p>
    </div>
  );
};

export default SignUp;
