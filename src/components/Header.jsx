// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <div className="w-full p-4 bg-white  flex items-center justify-between">
      <h1 className="text-base">Bạn muốn đi đâu thế ?</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md py-2 px-4 w-64"
        />
      </div>
    </div>
  );
};

export default Header;
