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

const Sidebar = () => {
  const topMenus = [
    { title: "My Avatars", icon: <FaUserAlt /> },
    { title: "Generate Avatar", icon: <FaMagic /> },
    { title: "Gallery", icon: <FaImages /> },
    { title: "Customization", icon: <FaCogs /> },
    { title: "Downloads", icon: <FaCloudDownloadAlt /> },
    { title: "Help & Support", icon: <FaQuestionCircle /> },
  ];

  const bottomMenus = [
    { title: "Notifications", icon: <FaBell /> },
    { title: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="fixed left-3 top-3 h-[calc(100vh-1.5rem)] w-20 md:w-64 bg-white text-gray-800 rounded-2xl p-4 pt-8 flex flex-col justify-between z-50 shadow-2xl">
      {/* Top Section */}
      <div>
        <div className="text-center mb-6 text-xl md:text-2xl italic text-indigo-600 font-bold tracking-wide">
          <h4>AvatarAI</h4>
        </div>

        <ul>
          {topMenus.map((menu, idx) => (
            <li
              key={idx}
              className="flex items-center gap-x-4 text-sm text-gray-600 cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition mb-2"
            >
              <span className="text-lg">{menu.icon}</span>
              <span className="hidden md:block">{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <ul className="border-t border-gray-200 pt-4">
        {bottomMenus.map((menu, idx) => (
          <li
            key={idx}
            className="flex items-center gap-x-4 text-sm text-gray-600 cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition mt-2"
          >
            <span className="text-lg">{menu.icon}</span>
            <span className="hidden md:block">{menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
