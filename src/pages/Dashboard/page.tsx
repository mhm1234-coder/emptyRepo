export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* HEADER */}
      <div className="mb-10">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Dashboard
        </h2>

        <section className="flex flex-col md:flex-row items-center justify-between bg-red-700 p-6 rounded-2xl shadow-md">

          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-700">
              Welcome back! We Manage your orders and prescriptions
            </p>
            <p className="text-gray-500">
              Track your orders, manage prescriptions, and access your account details.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <img
              src="/images/dashboardimage.png"
              className="w-36 md:w-44"
              alt="dashboard"
            />
          </div>

        </section>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-gray-500">Total Orders</h3>
          <h2 className="text-2xl font-bold text-red-600">12</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-gray-500">Active Orders</h3>
          <h2 className="text-2xl font-bold text-red-600">2</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-gray-500">Total Spent</h3>
          <h2 className="text-2xl font-bold text-red-600">Rs 3450</h2>
        </div>

      </div>

      {/* ORDERS TABLE */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Orders
      </h3>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md mb-10">
        <table className="w-full text-left">

          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Medicine</th>
              <th className="p-3">Status</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">

            <tr className="border-t">
              <td className="p-3">#101</td>
              <td className="p-3">Panadol</td>
              <td className="p-3 text-green-600 font-medium">Delivered</td>
              <td className="p-3">Rs 120</td>
            </tr>

            <tr className="border-t">
              <td className="p-3">#102</td>
              <td className="p-3">Vitamin C</td>
              <td className="p-3 text-yellow-600 font-medium">Processing</td>
              <td className="p-3">Rs 300</td>
            </tr>

            <tr className="border-t">
              <td className="p-3">#103</td>
              <td className="p-3">Baby Care</td>
              <td className="p-3 text-red-600 font-medium">Cancelled</td>
              <td className="p-3">Rs 450</td>
            </tr>

          </tbody>

        </table>
      </div>

      {/* QUICK ACTIONS */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Quick Actions
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">Shop Medicines</h3>
          <p className="text-gray-500 text-sm mb-3">
            Browse pharmacy products
          </p>
          <a
            href="/products"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Shop Now
          </a>
          <img src="/images/shop.png" className="w-24 mx-auto mt-4" />
        </div>

        {/* CARD 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">Track Orders</h3>
          <p className="text-gray-500 text-sm mb-3">
            Check your delivery status
          </p>
          <a
            href="/cart"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            View Cart
          </a>
          <img src="/images/trackorder.png" className="w-24 mx-auto mt-4" />
        </div>

        {/* CARD 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">
            24/7 Support Services
          </h3>
          <p className="text-gray-500 text-sm mb-3">
            Contact pharmacy team
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Contact
          </a>
          <img src="/images/support.png" className="w-24 mx-auto mt-4" />
        </div>

      </div>

    </div>
  );
}