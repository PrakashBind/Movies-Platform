// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <div>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/movies">Movies</Link>
//         <Link to="/login">Login</Link>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
        About
      </NavLink>
      <NavLink to="/movies" className={({ isActive }) => (isActive ? "active" : "")}>
        Movies
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
        Login
      </NavLink>
    </div>
  );
};

export default Navbar;
