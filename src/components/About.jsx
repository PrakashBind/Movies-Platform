import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="highlight">MovieApp</span> 🎬, your
          one-stop destination for exploring movies, TV shows, and much more.
          Our goal is to provide a smooth and engaging experience for all movie
          lovers.
        </p>
        <div className="about-cards">
          <div className="card">
            <h2>🎥 Movies</h2>
            <p>
              Browse thousands of movies with details like cast, year, and
              ratings.
            </p>
          </div>
          <div className="card">
            <h2>📺 TV Shows</h2>
            <p>Get details of popular TV shows and discover trending series.</p>
          </div>
          <div className="card">
            <h2>👨‍💻 Developers</h2>
            <p>
              Built with MERN stack, ensuring a modern and scalable experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
