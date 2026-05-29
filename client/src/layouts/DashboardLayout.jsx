import { useState } from "react";

import Sidebar from "../components/Sidebar";

import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import Analytics from "../pages/Analytics";
import InterviewPrep from "../pages/InterviewPrep";
import JobSearch from "../pages/JobSearch";

export default function DashboardLayout({
  user,
}) {

  const [page, setPage] =
    useState("dashboard");

  const [applications, setApplications] =
    useState([]);

  const applyJob = (job) => {

    const exists =
      applications.find(
        (item) => item.id === job.id
      );

    if (exists) {
      alert("Already Applied");
      return;
    }

    setApplications([
      ...applications,
      {
        ...job,
        status: "Applied",
      },
    ]);

    alert(
      `Applied Successfully to ${job.company}`
    );
  };

  const renderPage = () => {

    switch (page) {

      case "applications":
        return (
          <Applications
            applications={
              applications
            }
          />
        );

      case "analytics":
        return <Analytics />;

      case "prep":
        return (
          <InterviewPrep />
        );

      case "jobs":
        return (
          <JobSearch
            applyJob={applyJob}
          />
        );

      default:
        return (
          <Dashboard
            applications={
              applications
            }
          />
        );
    }
  };

  return (
    <div className="layout">

      <Sidebar setPage={setPage} />

      <div className="main">

        <div className="topbar">

          <h2>
            Welcome, {user.name}
          </h2>

          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem(
                "user"
              );

              window.location.reload();
            }}
          >
            Logout
          </button>

        </div>

        {renderPage()}

      </div>

    </div>
  );
}