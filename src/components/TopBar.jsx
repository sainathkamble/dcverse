import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MobileMenu } from "./MobileMenu"; // Make sure this is the correct path

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 rounded-2xl px-4 sm:px-6 py-6 shadow-sm relative">
      {/* Top Row: Search, Menu Icon & Profile */}
      <div className="flex items-center justify-between gap-4 max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
            <FaSearch className="text-gray-400 w-5 h-5 mr-3" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-gray-700 placeholder-gray-400 text-base outline-none border-none"
            />
          </div>
        </div>

        {/* Menu Button (Visible on Mobile Only) */}
        <button
          className="md:hidden cursor-pointer text-gray-800 text-3xl"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Welcome Banner */}
      <div className="mt-6 relative rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 p-8 text-center text-white overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Create Your Perfect AI Avatar in Seconds
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Upload a photo or start from scratch. Our AI generates realistic,
            stylized, or fantasy avatars personalized just for you.
          </p>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default TopBar;
