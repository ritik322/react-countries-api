import axios from "axios";
import Card from "./Card";
import { useCallback, useContext, useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";

const CardContainer = ({ query, isRegionQuery }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);
  const shimmerCards = Array.from({length:16},()=><ShimmerCard key={crypto.randomUUID()} />)

  return (
    <div className="grid md:grid-cols-2 min-[1200px]:grid-cols-4 py-12 gap-10">
      {data == null
        ? shimmerCards.map((card) => card)
        : data
            .filter((country) => {
              return isRegionQuery == true
                ? country.region.toLowerCase().includes(query.trim().toLowerCase())
                : country.name.common
                    .toLowerCase()
                    .includes(query.trim().toLowerCase());
            })
            .map((country) => {
              const { population, region, flags, capital, name } = country;
              return (
                <Card
                  country = {country}
                  key={crypto.randomUUID()}
                  population={population}
                  region={region}
                  flag={flags.svg}
                  capital={capital}
                  name={name.common}
                />
              );
            })}
    </div>
  );
};

export default CardContainer;
