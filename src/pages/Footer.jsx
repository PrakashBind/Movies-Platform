import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>MovieApp</h2>
        <p>Discover movies, shows, and more with ease!</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/movies">Movies</a>
          <a href="/login">Login</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MovieApp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
