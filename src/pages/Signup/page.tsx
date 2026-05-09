
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.find((u: any) => u.email === email);

    if (exists) {
      setMessage("User already exists");
      return;
    }

    users.push({
      name,
      email,
      password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Signup successful");

    setTimeout(() => {
      navigate("/Login");
    }, 1000);
  };

  return (
    <div className="form-container">

      <form onSubmit={handleSignup}>
        <h2>Signup</h2>

        {message && <p>{message}</p>}

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Signup</button>
      </form>

    </div>
  );
}