import { useParams, useNavigate } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function DetailPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const data = {
    applications: {
      title: "Applications Sent",
      details: [
        "Google - Pending",
        "Amazon - Interview Scheduled",
        "Infosys - Rejected",
      ],
    },
    views: {
      title: "Profile Views Analytics",
      details: [
        "LinkedIn - 12 views",
        "Naukri - 5 views",
        "Indeed - 5 views",
      ],
    },
    matching: {
      title: "Matching Rate System",
      details: [
        "Skill Match: 78%",
        "Job Fit: 82%",
        "Resume Score: 75%",
      ],
    },
    offers: {
      title: "Job Offers",
      details: [
        "TCS - Offer Received",
        "Wipro - In Review",
      ],
    },
  };

  const current = data[type];

  if (!current) return <h2>Not Found</h2>;

  return (
    <div style={{ padding: 30 }}>
      <BackHomeButton />

      <h1>{current.title}</h1>

      <div className="card">
        {current.details.map((item, i) => (
          <p key={i}>• {item}</p>
        ))}
      </div>

      <button onClick={() => navigate(-1)}>
        ← Go Back
      </button>
    </div>
  );
}