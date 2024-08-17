import axios from "axios";
import React, { useEffect, useState } from "react";
import BorderButton from "./BorderButton";
import BorderButtonShimmer from "./BorderButtonShimmer";

const BorderButtonsContainer = ({
  borderCodes,
  countriesBordersData,
  setBordersCountriesData,
}) => {
  useEffect(() => {
    Promise.all(
      borderCodes.map((code) =>
        axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
      )
    ).then((responses) => {
      const fetchedData = responses.map((response) => response.data);
      setBordersCountriesData(fetchedData);
    });
  }, [borderCodes, setBordersCountriesData]);
  const shimmerButtons = Array.from({ length: 5 }, () => (
    <BorderButtonShimmer key={crypto.randomUUID()} />
  ));

  return (
    <div className="flex flex-wrap gap-4">
      Borders:
      {countriesBordersData === null
        ? shimmerButtons.map((shimButton) => shimButton)
        : countriesBordersData.map(([country]) => (
            <BorderButton
              countryName={country.name.common}
              key={crypto.randomUUID()}
              country={country}
            />
          ))}
    </div>
  );
};

export default BorderButtonsContainer;
