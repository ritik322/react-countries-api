import React from "react";

const SearchContainer = ({ setQuery, setIsRegionQuery }) => {
  return (
    <div className="bg-[#FFFFFF] shadow-md dark:text-[#fff] rounded-md dark:bg-[#2b3945] space-x-4 sm:space-x-3 py-2 px-4 flex items-center overflow-hidden max-w-[336px] ">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e) => {
          setIsRegionQuery(false);
          setQuery(e.target.value);
        }}
        type="text"
        className="outline-none dark:bg-[#2b3945]"
        placeholder="Search for country..."
      ></input>
    </div>
  );
};

export default SearchContainer;
