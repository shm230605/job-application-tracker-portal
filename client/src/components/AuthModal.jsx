import { useState } from "react";

import { motion } from "framer-motion";

export default function AuthModal({
  setUser,
}) {
  const [isLogin, setIsLogin] =
    useState(true);

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      name:
        form.name || "Guest User",
      email: form.email,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  return (
    <div className="auth-container">

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="auth-card"
      >

        <h1 className="logo">
          JOBIE
        </h1>

        <div className="auth-toggle">

          <button
            className={
              isLogin ? "active" : ""
            }
            onClick={() =>
              setIsLogin(true)
            }
          >
            Login
          </button>

          <button
            className={
              !isLogin
                ? "active"
                : ""
            }
            onClick={() =>
              setIsLogin(false)
            }
          >
            Register
          </button>

        </div>

        <form onSubmit={submitHandler}>

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) =>
                setForm({
                  ...form,
                  name:
                    e.target.value,
                })
              }
            />
          )}

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setForm({
                ...form,
                email:
                  e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
            }
          />

          <button type="submit">
            {isLogin
              ? "Login"
              : "Register"}
          </button>

        </form>

      </motion.div>

    </div>
  );
}