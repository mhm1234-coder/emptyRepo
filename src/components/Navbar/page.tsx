import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav>
      {/* LOGO */}
      <NavLink to="/" className="logo">
        My Pharmacy Store
      </NavLink>

      {/* LINKS */}
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/services">Services</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        {isLoggedIn && (
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        )}

        <li>
          <NavLink to="/cart">
            Cart ({totalItems})
          </NavLink>
        </li>

        {!isLoggedIn ? (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>

            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        ) : (
          <li>
            <button onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;