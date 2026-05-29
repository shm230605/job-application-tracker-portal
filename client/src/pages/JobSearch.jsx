import { useState } from "react";

import { jobsData } from "../data/jobsData";

export default function JobSearch({
  applyJob,
}) {

  const [search, setSearch] =
    useState("");

  const filteredJobs =
    jobsData.filter((job) =>
      (
        job.company +
        job.role +
        job.location +
        job.type
      )
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div>

      <h1 className="section-title">
        Search Jobs & Internships
      </h1>

      <input
        type="text"
        placeholder="Search company, jobs, internships..."
        className="search-input"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="companies">

        {filteredJobs.map((job) => (

          <div
            key={job.id}
            className="company-card"
          >

            <h2>
              {job.company}
            </h2>

            <p>
              💼 {job.role}
            </p>

            <p>
              📍 {job.location}
            </p>

            <p>
              💰 {job.salary}
            </p>

            <p>
              🏢 {job.type}
            </p>

            <p
              style={{
                marginTop: "10px",
              }}
            >
              {job.description}
            </p>

            <button
              className="apply-btn"
              onClick={() =>
                applyJob(job)
              }
            >
              Apply Now
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}