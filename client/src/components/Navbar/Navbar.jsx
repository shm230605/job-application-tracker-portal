import {
  FaBell,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      
      {/* SEARCH */}

      <div className="flex items-center bg-slate-800 px-4 py-2 rounded-xl w-[350px]">
        <FaSearch className="text-slate-400" />

        <input
          type="text"
          placeholder="Search applications..."
          className="bg-transparent outline-none ml-3 text-white w-full"
        />
      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-5">
        
        <button className="relative">
          <FaBell className="text-xl text-slate-300" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
            3
          </span>
        </button>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full border-2 border-indigo-500"
        />
      </div>
    </div>
  );
};

export default Navbar;