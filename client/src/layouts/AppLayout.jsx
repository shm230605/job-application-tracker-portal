import { Outlet, useNavigate } from "react-router-dom";

export default function AppLayout() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      <aside style={{ width: 220, padding: 20 }}>
        <h2>JobTracker</h2>

        <button onClick={() => navigate("/app/dashboard")}>
          Dashboard
        </button>

        <button onClick={() => navigate("/app/features")}>
          Features
        </button>

        <button onClick={() => navigate("/app/details/applications")}>
          Analytics
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </aside>

      <main style={{ flex: 1, padding: 20 }}>
        <Outlet />
      </main>

    </div>
  );
}