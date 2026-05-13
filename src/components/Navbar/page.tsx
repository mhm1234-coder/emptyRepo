import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();

  const [search, setSearch] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate("/?q=" + search);
  }

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="nav">

      <Link to="/" className="logo">Pharmacy Store</Link>

      <form onSubmit={handleSearch} className="search-box">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search medicines..."
        />
      </form>

      <ul className="nav-links">

        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>

        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li className={location.pathname === "/services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>

        <li className={location.pathname === "/cart" ? "active" : ""}>
          <Link to="/cart">
            Cart <span className="badge">{totalItems}</span>
          </Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={location.pathname === "/login" ? "active" : ""}>
          <Link to="/login">Login</Link>
          
        </li>

      </ul>

    </nav>
  );
}