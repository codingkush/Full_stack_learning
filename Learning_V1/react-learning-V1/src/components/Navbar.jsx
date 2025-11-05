import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/testimonials">Testimonials</Link>

      <span style={{ float: "right" }}>
        {user ? (
          <>
            Welcome, <b>{user.name}</b> 👋
          </>
        ) : (
          <>
            <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link>
          </>
        )}
      </span>
    </nav>
  );
};

export default Navbar;
