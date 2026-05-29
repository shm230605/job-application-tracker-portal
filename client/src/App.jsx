import { useState } from "react";

import AuthModal from "./components/AuthModal";

import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  if (!user) {
    return (
      <AuthModal setUser={setUser} />
    );
  }

  return (
    <DashboardLayout user={user} />
  );
}