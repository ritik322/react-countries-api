import React from "react";

const Header = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <nav className="max-w-screen-2xl left-[50%] -translate-x-[50%] fixed z-10 w-full top-0">
      <div className="flex px-6 sm:px-24 py-1 sm:py-4 shadow-md justify-between dark:text-[#fff] bg-[rgb(255,255,255)] dark:bg-[#2b3945] items-center  ">
        <h1 className="sm:font-bold text-sm sm:text-2xl ">Where In the World?</h1>
        <button
          className="sm:space-x-2 flex items-center p-2 text-sm sm:text-base"
          onClick={() => {
            localStorage.setItem("isDarkMode", !isDarkMode);
            setIsDarkMode(!isDarkMode);
          }}
        >
          <i className={`fa-solid fa-${isDarkMode ? "sun" : "moon"}`}></i>
          <span className="hidden sm:block">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
