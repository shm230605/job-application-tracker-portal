import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BackHomeButton from "../components/BackHomeButton";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    if (!formData.email || !formData.password) {
      return toast.error("All fields required");
    }

    if (formData.password.length < 6) {
      return toast.error("Invalid password");
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      toast.success("Login Successful");
      navigate("/dashboard");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="authBox">
      <BackHomeButton />

      <form className="card" onSubmit={handleSubmit}>
        <h2>Login</h2>

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

        <button type="submit">Login</button>

        <p onClick={() => navigate("/register")}>
          Create new account
        </p>
      </form>
    </div>
  );
}