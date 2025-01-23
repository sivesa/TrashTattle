// components/AuthForm.tsx
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

interface AuthFormProps {
  mode: "register" | "login";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const { register, login, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === "register") {
        await register({ email, password });
        alert("Registration successful!");
      } else {
        await login({ email, password });
        alert("Login successful!");
      }
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{mode === "register" ? "Register" : "Login"}</h2>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : mode === "register" ? "Register" : "Login"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default AuthForm;

