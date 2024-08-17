import React from "react";

const ShimmerCard = () => {
  return (
    <div className="shadow-md hover:scale-105 duration-500 flex flex-col h-80 overflow-hidden dark:bg-[#2b3945] justify-self-center w-60 rounded-xl bg-[#fff]">
        <div className="animate-pulse h-full p-4 ">
        <div className="h-1/2 bg-slate-600 rounded-md "></div>
        <div className="p-4 space-y-3">
            <div className="h-5 w-36 mb-6 rounded-md bg-slate-600"></div>
            <div className="h-4 w-28 rounded-md bg-slate-600"></div>
            <div className="h-4 w-20 rounded-md bg-slate-600"></div>
            <div className="h-4 w-24 rounded-md bg-slate-600"></div>
        </div>
        </div>
    </div>
  );
};

export default ShimmerCard;
