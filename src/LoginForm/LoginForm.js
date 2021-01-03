import React, { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFilledIn = email && password;

  return (
    <div>
      <form className="LoginForm">
        <label htmlFor="LoginForm-email">Email address </label>
        <input
          type="text"
          required
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="LoginForm-password">Password</label>
        <input
          required
          name="password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" disabled={!isFilledIn}>
          Login
        </button>
      </form>
    </div>
  );
}
