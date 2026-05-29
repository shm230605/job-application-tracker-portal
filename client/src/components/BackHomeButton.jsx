import { useNavigate } from "react-router-dom";

export default function BackHomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="backHomeBtn"
    >
      ⬅ Back to Home
    </button>
  );
}