import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to My Website 🚀</h1>
        <p>
          This is the Home Page. Here you can explore movies, about section, and
          login to your account.
        </p>
        <button className="home-btn">Explore Movies</button>
      </div>
    </div>
  );
};

export default Home;
