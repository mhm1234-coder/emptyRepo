import { Link } from "react-router-dom";
import type { Product } from "../../App";

type NavbarProps = {
  search: string;
  setSearch: (value: string) => void;
  cart: Product[];
};

export default function Navbar({ search, setSearch, cart }: NavbarProps) {
  return (
    <nav>

      {/* LOGO */}
      <Link to="/">My Pharmacy Store</Link>

      {/* NAV LINKS */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search medicines..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CART */}
      <div className="cart-box">
        Cart ({cart.length})
      </div>

    </nav>
  );
}