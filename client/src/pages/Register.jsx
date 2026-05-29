import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BackHomeButton from "../components/BackHomeButton";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      return toast.error("All fields required");
    }

    if (formData.password.length < 6) {
      return toast.error("Password must be 6+ characters");
    }

    localStorage.setItem("user", JSON.stringify(formData));

    toast.success("Registered Successfully");

    navigate("/login");
  };

  return (
    <div className="authBox">
      <BackHomeButton />

      <form className="card" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">Register</button>

        <p onClick={() => navigate("/login")}>
          Already have account? Login
        </p>
      </form>
    </div>
  );
}