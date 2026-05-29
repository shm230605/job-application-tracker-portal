import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <h1>Job Tracker SaaS</h1>
        <p>Track applications, interviews, and job progress easily</p>

        <div className="btnGroup">
          <button onClick={() => navigate("/dashboard")}>
            Get Started
          </button>

          <button onClick={() => navigate("/features")}>
            Explore Features
          </button>
        </div>

        <div className="authGroup">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>
    </div>
  );
}