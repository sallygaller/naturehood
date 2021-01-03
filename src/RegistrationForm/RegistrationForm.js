import React, { useState } from "react";

export default function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zip, setZip] = useState("");

  const isFilledIn = firstName && lastName && email && password && zip;
  return (
    <form className="RegistrationForm">
      <div>
        <label htmlFor="first-name">First name </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last name </label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Email </label>
        <input
          type="text"
          name="username"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="zip">Zip code </label>
        <input
          type="zip"
          name="zip"
          id="zip"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </div>
      <button type="submit" disabled={!isFilledIn}>
        Sign Up!
      </button>
    </form>
  );
}
