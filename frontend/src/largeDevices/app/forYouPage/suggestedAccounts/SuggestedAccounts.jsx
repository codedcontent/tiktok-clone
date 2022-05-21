import React, { useEffect, useState } from "react";
import "./styles.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const SuggestedAccounts = () => {
  const [suggestedAccounts, setSuggestedAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const accountsCount = 5;
      const url = `https://randomuser.me/api/?results=${accountsCount}`;

      const response = await fetch(url, { method: "GET" });

      const data = await response.json();

      const accounts = data.results;

      setSuggestedAccounts(
        accounts.map((account) => ({
          img: account.picture.large,
          name: account.name,
          id: account.login.uuid,
        }))
      );
    };

    fetchAccounts();
  }, []);

  //   Generate some more random people for suggestions
  const generateMoreSuggestions = () => {
    // Code here
  };

  return (
    <div className="suggestedAccounts">
      {suggestedAccounts.map(({ img, name: { first, last }, id }) => (
        <div className="suggestedAccounts__accountWrapper" key={id}>
          <a href={`/@${first}${last}`}>
            <div className="suggestedAccounts__avatarWrapper">
              <img
                src={img}
                alt="some random person"
                width="50px"
                height="50px"
              />
            </div>
          </a>

          <div className="suggestedAccounts__details">
            <a href={`/@${first}${last}`}>
              <span className="suggestedAccounts__tiktokName">
                {`${first}${last}`}
                <VerifiedIcon
                  sx={{ color: "#20D5EC", marginLeft: 1 }}
                  fontSize="small"
                />
              </span>
            </a>

            <p className="suggestedAccounts__username">
              {first} {last}
            </p>
          </div>
        </div>
      ))}

      <p
        className="suggestedAccounts__seeAll"
        onClick={generateMoreSuggestions}
      >
        See all
      </p>
    </div>
  );
};

export default SuggestedAccounts;
