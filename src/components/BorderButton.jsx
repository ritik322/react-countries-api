import React from "react";
import { Link } from "react-router-dom";

const BorderButton = ({ countryName,country }) => {
  return (
    <Link
      to={`/${countryName}`}
      state = {country}
      className="shadow-md inline-block dark:text-[#fff] bg-[rgb(255,255,255)] dark:bg-[#2b3945] px-4 py-1 rounded-lg"
    >
      {countryName}
    </Link>
  );
};

export default BorderButton;
