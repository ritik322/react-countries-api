import React from "react";

const Select = ({ setQuery, setIsRegionQuery }) => {
  return (
    <div>
      <select
        onChange={(e) => {
          setIsRegionQuery(true);
          setQuery(e.target.value);
        }}
        name="Region"
        className="py-2 px-4 rounded-md shadow-md dark:text-[#fff] dark:bg-[#2b3945] outline-none"
        defaultValue=""
      >
        <option value="" hidden>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="ocenia">Ocenia</option>
      </select>
    </div>
  );
};

export default Select;
