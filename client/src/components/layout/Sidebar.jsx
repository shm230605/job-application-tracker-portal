import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  Briefcase,
  BarChart3,
  BookOpen,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-[250px] h-screen bg-gradient-to-b from-purple-700 to-indigo-900 text-white fixed left-0 top-0 p-6">

      <h1 className="text-3xl font-bold mb-10">
        Jobie Tracker
      </h1>

      <div className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center gap-3"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/applications"
          className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center gap-3"
        >
          <Briefcase size={20} />
          Applications
        </Link>

        <Link
          to="/analytics"
          className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center gap-3"
        >
          <BarChart3 size={20} />
          Analytics
        </Link>

        <Link
          to="/interview-prep"
          className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center gap-3"
        >
          <BookOpen size={20} />
          Interview Prep
        </Link>

      </div>
    </div>
  );
}