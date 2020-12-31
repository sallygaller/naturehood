import React from "react";

export default function RegistrationForm() {
  return (
    <form className="RegistrationForm">
      <div>
        <label for="first-name">First name</label>
        <input
          placeholder="First Name"
          type="text"
          name="first-name"
          id="first-name"
        />
      </div>
      <div>
        <label for="last-name">Last name</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Last Name"
        />
      </div>
      <div>
        <label for="username">Email</label>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <label for="zip">Zip code</label>
        <input type="zip" name="zip" id="zip" />
      </div>
      <button type="submit">Sign Up!</button>
    </form>
  );
}
