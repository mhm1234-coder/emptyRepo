import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields required");
      return;
    }

    if (password.length < 4) {
      alert("Password too weak");
      return;
    }

    alert("Account created successfully");

    navigate("/login");
  }

  return (
    <div className="page">

      <h2>Signup</h2>

      <div className="form-container">

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Create Account</button>

        </form>

      </div>

    </div>
  );
}