// src/components/Signup.jsx
import React from "react";
import "./Auth.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
