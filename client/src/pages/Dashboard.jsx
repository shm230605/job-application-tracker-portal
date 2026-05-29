import { useState } from "react";

import { motion } from "framer-motion";

export default function Dashboard() {

  const [selectedCard, setSelectedCard] =
    useState(null);

  const stats = [
    {
      title: "Applications",
      value: 48,

      details: [
        {
          company: "Google",
          role:
            "Frontend Engineer",
          status: "Applied",
        },

        {
          company: "Amazon",
          role:
            "React Developer",
          status: "Interview",
        },

        {
          company: "Meta",
          role:
            "UI Engineer",
          status: "Under Review",
        },
      ],
    },

    {
      title: "Interviews",
      value: 12,

      details: [
        {
          company: "Google",
          date:
            "Tomorrow 10AM",
          mode: "Virtual",
        },

        {
          company: "Netflix",
          date:
            "Friday 2PM",
          mode: "Offline",
        },
      ],
    },

    {
      title: "Offers",
      value: 3,

      details: [
        {
          company: "Adobe",
          package: "18 LPA",
        },

        {
          company: "Spotify",
          package: "22 LPA",
        },
      ],
    },

    {
      title: "Profile Views",
      value: 22,

      details: [
        {
          recruiter:
            "Google Recruiter",
        },

        {
          recruiter:
            "Amazon HR",
        },
      ],
    },
  ];

  return (
    <div>

      <div className="dashboard-grid">

        {stats.map((item, i) => (

          <motion.div
            key={i}
            whileHover={{
              scale: 1.04,
            }}
            className="card clickable-card"
            onClick={() =>
              setSelectedCard(item)
            }
          >

            <h2>{item.title}</h2>

            <h1>{item.value}</h1>

            <p className="view-more">
              Click for Details →
            </p>

          </motion.div>

        ))}

      </div>

      {selectedCard && (

        <div className="popup-overlay">

          <div className="popup-card">

            <button
              className="close-btn"
              onClick={() =>
                setSelectedCard(null)
              }
            >
              ✕
            </button>

            <h1>
              {selectedCard.title}
            </h1>

            <div className="popup-content">

              {selectedCard.details.map(
                (detail, i) => (

                  <div
                    key={i}
                    className="detail-card"
                  >

                    {Object.keys(
                      detail
                    ).map((key) => (

                      <p key={key}>
                        <strong>
                          {key}:
                        </strong>{" "}
                        {detail[key]}
                      </p>

                    ))}

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}