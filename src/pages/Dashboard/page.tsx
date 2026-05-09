import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div>

      <div className="page">
        <h1>Dashboard</h1>
        <p>Manage products, orders, and pharmacy stock.</p>

        <button onClick={logout}>
          Logout
        </button>
      </div>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Total Products</h3>
          <p>4</p>
        </div>

        <div className="card">
          <h3>Total Orders</h3>
          <p>10</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>Rs. 5000</p>
        </div>

        <div className="card">
          <h3>Low Stock</h3>
          <p>2 Items</p>
        </div>

      </div>

    </div>
  );
}