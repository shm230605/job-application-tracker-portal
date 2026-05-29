import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaHome,
  FaChartPie,
  FaBriefcase,
  FaCog,
  FaUser,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import useTheme from "../../hooks/useTheme";

const Sidebar = () => {
  const location =
    useLocation();

  const {
    darkMode,
    setDarkMode,
  } = useTheme();

  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },

    {
      name: "Applications",
      path: "/applications",
      icon: (
        <FaBriefcase />
      ),
    },

    {
      name: "Analytics",
      path: "/analytics",
      icon: (
        <FaChartPie />
      ),
    },

    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },

    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div className="w-[260px] min-h-screen bg-slate-900 text-white border-r border-slate-800 flex flex-col justify-between">
      
      {/* LOGO */}

      <div>
        <div className="p-6 text-3xl font-bold border-b border-slate-800">
          JobTracker
        </div>

        {/* NAVIGATION */}

        <div className="mt-5 px-4">
          {links.map(
            (link) => (
              <Link
                key={
                  link.name
                }
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-3 transition-all duration-300 ${
                  location.pathname ===
                  link.path
                    ? "bg-indigo-500 text-white"
                    : "hover:bg-slate-800 text-slate-300"
                }`}
              >
                {link.icon}

                <span>
                  {link.name}
                </span>
              </Link>
            )
          )}
        </div>
      </div>

      {/* THEME TOGGLE */}

      <div className="p-5 border-t border-slate-800">
        <button
          onClick={() =>
            setDarkMode(
              !darkMode
            )
          }
          className="w-full flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 transition-all py-3 rounded-xl"
        >
          {darkMode ? (
            <>
              <FaSun />

              Light Mode
            </>
          ) : (
            <>
              <FaMoon />

              Dark Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;