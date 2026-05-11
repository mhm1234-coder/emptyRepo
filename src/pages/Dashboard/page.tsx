import React from "react";
import { useCart } from "../../context/CartContext";

const Dashboard = () => {
  const { cart, getTotal } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="dashboard">

      <div className="box">
        <h2>Pharmacy Dashboard</h2>
        <p>Overview of your store activity</p>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>Total Items</h3>
            <p>{totalItems}</p>
          </div>

          <div className="stat-card">
            <h3>Cart Products</h3>
            <p>{cart.length}</p>
          </div>

          <div className="stat-card">
            <h3>Total Revenue</h3>
            <p>Rs {getTotal()}</p>
          </div>

          <div className="stat-card">
            <h3>Status</h3>
            <p>Active</p>
          </div>

        </div>
      </div>

      {/* QUICK CART PREVIEW */}
      <div className="box">
        <h2>Recent Cart Items</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Medicine</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>Rs {item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>

    </div>
  );
};

export default Dashboard;