import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  return (
    <div className="featuresPage">
      <h1>Features</h1>

      <ul>
        <li>Job Vacancy Trends</li>
        <li>Interview Scheduling</li>
        <li>Application Tracking</li>
        <li>Profile Views Analytics</li>
        <li>Job Offer Tracking</li>
        <li>Matching Rate System</li>
        <li>Recruitment Pipeline</li>
        <li>Resource Center</li>
        <li>Interview Preparation</li>
      </ul>

      <button onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
}