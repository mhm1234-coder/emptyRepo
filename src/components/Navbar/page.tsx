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

  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-red-600 font-semibold"
      : "text-gray-600 hover:text-red-600";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

      {/* LOGO */}
      <Link to="/" className="text-2xl font-bold text-red-600">
        Pharmacy Store
      </Link>

      {/* SEARCH */}
      <form
        onSubmit={handleSearch}
        className="flex w-full md:w-1/3"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search medicines..."
          className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-4 rounded-r-lg hover:bg-red-700"
        >
          Search
        </button>
      </form>

      {/* LINKS */}
      <ul className="flex flex-wrap items-center gap-4 text-sm md:text-base">

        <li>
          <Link className={linkClass("/")} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className={linkClass("/dashboard")} to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link className={linkClass("/services")} to="/services">
            Services
          </Link>
        </li>

        <li>
          <Link to="/cart" className={`relative ${linkClass("/cart")}`}>
            Cart

            <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </Link>
        </li>

        <li>
          <Link className={linkClass("/contact")} to="/contact">
            Contact
          </Link>
        </li>

        <li>
          <Link className={linkClass("/login")} to="/login">
            Login
          </Link>
        </li>

      </ul>

    </nav>
  );
}