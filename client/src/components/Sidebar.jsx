import {
  LayoutDashboard,
  Briefcase,
  BarChart3,
  BookOpen,
  Search,
} from "lucide-react";

export default function Sidebar({
  setPage,
}) {
  return (
    <div className="sidebar">

      <h1 className="logo">
        JOBIE
      </h1>

      <button
        onClick={() =>
          setPage("dashboard")
        }
      >
        <LayoutDashboard />
        Dashboard
      </button>

      <button
        onClick={() =>
          setPage("applications")
        }
      >
        <Briefcase />
        Applications
      </button>

      <button
        onClick={() =>
          setPage("analytics")
        }
      >
        <BarChart3 />
        Analytics
      </button>

      <button
        onClick={() =>
          setPage("prep")
        }
      >
        <BookOpen />
        Interview Prep
      </button>

      <button
        onClick={() =>
          setPage("jobs")
        }
      >
        <Search />
        Job Search
      </button>

    </div>
  );
}