import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 50, textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}