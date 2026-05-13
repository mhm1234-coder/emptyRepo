export default function Dashboard() {
  return (
    <div className="page">

      {/* HEADER */}
      <div className="page-header">
        <h2> Dashboard</h2>
        <section className="dashboard-banner">
          <div className="dashboard-banner-content">
            <p>Welcome back!  We Manage your orders and prescriptions</p>
            <p>Track your orders, manage prescriptions, and access your account details.</p>
          </div>
          <div className="dashboard-banner-image">
            <img src="/images/dashboardimage.png" width="150" />
          </div>
        </section>
      </div>

      {/* STATS */}
      <div className="card-container">

        <div className="card stat">
          <h3>Total Orders</h3>
          <h2>12</h2>
        </div>

        <div className="card stat">
          <h3>Active Orders</h3>
          <h2>2</h2>
        </div>

        <div className="card stat">
          <h3>Total Spent</h3>
          <h2>Rs 3450</h2>
        </div>

      </div>

      
      {/* ORDERS */}
      <h3 className="section-title"> Recent Orders</h3>

      <table>

        <thead>
          <tr>
            <th>Order ID</th>
            <th>Medicine</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#101</td>
            <td>Panadol</td>
            <td className="status-delivered">Delivered</td>
            <td>Rs 120</td>
          </tr>

          <tr>
            <td>#102</td>
            <td>Vitamin C</td>
            <td className="status-processing">Processing</td>
            <td>Rs 300</td>
          </tr>

          <tr>
            <td>#103</td>
            <td>Baby Care</td>
            <td className="status-cancelled">Cancelled</td>
            <td>Rs 450</td>
          </tr>
        </tbody>

      </table>
{/* QUICK ACTIONS */}
      <h3 className="section-title"> Quick Actions</h3>

      <div className="card-container">

        <div className="card">
          <h3> Shop Medicines</h3>
          <p>Browse pharmacy products</p>
          <a href="/products" className="link-button">Shop Now</a>
          <img src="/images/shop.png" width="100" />
        </div>
        <div className="card">
          <h3>Track Orders</h3>
          <p>Check your delivery status</p>
          <a href="/cart" className="link-button">View Cart</a>
          <img src="/images/trackorder.png" width="100" />
        </div>

        <div className="card">
          <h3> 24/7 Support Services</h3>
          <p>Contact pharmacy team</p>
          <a href="/contact" className="link-button">Contact</a>
          <img src="/images/support.png" width="100" />
        </div>

      </div>

    </div>
  );
}