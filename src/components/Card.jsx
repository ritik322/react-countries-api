import { data } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ country, population, region, flag, capital, name }) => {
  return (
    <Link
      to={{ pathname: `/${name}` }}
      state={country}
      className="shadow-md sm:hover:scale-105 duration-500 dark:text-[#fff] flex flex-col max-h-80 overflow-hidden dark:bg-[#2b3945] justify-self-center w-60 rounded-lg bg-[#fff]"
    >
      <div className="h-1/2">
        <img className="h-full w-full object-cover" src={flag} alt="" />
      </div>
      <div className="h-1/2 py-4 px-6 flex flex-col">
        <h4 className="font-bold mb-3">{name}</h4>
        <div>
          <p className="text-xs md:text-sm font-medium">
            Popultation:{" "}
            <span className="font-normal">
              {population.toLocaleString("en-IN")}
            </span>
          </p>
          <p className="text-xs md:text-sm font-medium">
            Region: <span className="font-normal">{region}</span>
          </p>
          <p className="text-xs md:text-sm font-medium">
            Capital: <span className="font-normal">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
