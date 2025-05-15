import React from "react";
import {
  FaUserAlt,
  FaMagic,
  FaImages,
  FaCogs,
  FaCloudDownloadAlt,
  FaQuestionCircle,
  FaBell,
  FaCog,
} from "react-icons/fa";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { title: "My Avatars", icon: <FaUserAlt /> },
    { title: "Generate Avatar", icon: <FaMagic /> },
    { title: "Gallery", icon: <FaImages /> },
    { title: "Customization", icon: <FaCogs /> },
    { title: "Downloads", icon: <FaCloudDownloadAlt /> },
    { title: "Help & Support", icon: <FaQuestionCircle /> },
    { title: "Notifications", icon: <FaBell /> },
    { title: "Settings", icon: <FaCog /> },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.9)] backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 z-50 text-white text-5xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>

      {/* All Menu Items */}
      <div className="flex flex-col gap-4 mt-16">
        {menuItems.map((item) => (
          <a
            key={item.title}
            href={`#${item.title.toLowerCase().replace(/ /g, "-")}`}
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white text-xl font-semibold transition-all duration-200 p-3 rounded-xl hover:text-black hover:bg-gray-200"
          >
            {item.icon}
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};
