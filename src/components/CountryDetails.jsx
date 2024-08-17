import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BorderButtonsContainer from "./BorderButtonsContainer";

const CountryDetails = () => {
  const { state } = useLocation();
  const [countriesBordersData, setBordersCountriesData] = useState(null);

  useEffect(() => {
    setBordersCountriesData(null);
  }, [state]);

  return (
    <div className=" py-32 dark:text-[#fff] w-full mx-auto max-w-screen-2xl px-12">
      <a
        href="/"
        className="dark:bg-[#2b3945] shadow-md bg-[white] rounded-md px-4 py-1 space-x-2  "
      >
        <i className="fa-solid fa-arrow-left"></i>
        <span>Back</span>
      </a>
      <div className="flex flex-col  lg:flex-row w-full p-10">
        <div className="w-1/2 h-3/4 p-4">
          <img
            className="lg:border-[16px] dark:border-[#2b3945]"
            src={state.flags.svg}
            title={`${state.name.common} flag `}
          />
        </div>
        <div className="lg:ml-32 space-y-4 lg:space-y-8 p-4 ">
          <h4 className="font-bold text-2xl lg:text-4xl">
            {state.name.common}
          </h4>
          <div className="flex flex-col lg:flex-row gap-4 xl:gap-32 w-full">
            <div className="space-y-2">
              <p>
                Native Name: {Object.values(state.name.nativeName)[0].common}
              </p>
              <p>Population: {state.population.toLocaleString("en-IN")}</p>
              <p>Region: {state.region}</p>
              {state.subregion == undefined ? (
                ""
              ) : (
                <p>Subregion: {state.subregion}</p>
              )}
              <p>Capital: {state.capital.join(", ")}</p>
            </div>
            <div className="space-y-2">
              <p>Top Level Domain: {state.tld.join(", ")}</p>
              <p>
                Currencies:{" "}
                {Object.values(state.currencies)
                  .map((cur) => `${cur.name} (${cur.symbol})`)
                  .join(", ")}
              </p>
              <p>Languages: {Object.values(state.languages).join(", ")}</p>
            </div>
          </div>
          {state.borders === undefined ? (
            ""
          ) : (
            <BorderButtonsContainer
              countriesBordersData={countriesBordersData}
              setBordersCountriesData={setBordersCountriesData}
              borderCodes={state.borders}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
