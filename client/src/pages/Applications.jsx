export default function Applications({
  applications,
}) {

  return (
    <div>

      <h1 className="section-title">
        My Applications
      </h1>

      {applications.length === 0 ? (

        <div className="card">

          <h2>
            No Applications Yet
          </h2>

          <p>
            Apply for jobs from
            the Job Search page.
          </p>

        </div>

      ) : (

        <div className="companies">

          {applications.map(
            (job, i) => (

              <div
                key={i}
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

                <span className="status applied">
                  {job.status}
                </span>

              </div>

            )
          )}

        </div>

      )}

    </div>
  );
}