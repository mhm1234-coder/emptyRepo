export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Our Services
      </h2>

      {/* BANNER */}
      <section className="bg-red-600 border border-red-600 p-5 rounded-xl text-center mb-10">
        <p className="text-gray-700">
          We offer a range of services to meet your healthcare needs
        </p>
      </section>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            24/7 Pharmacy
          </h3>
          <p className="text-gray-500 mb-4">
            Order medicines anytime, anywhere
          </p>
          <a
            href="/home"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Shop Now
          </a>
        </div>

        {/* CARD 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Home Delivery
          </h3>
          <p className="text-gray-500 mb-4">
            Get your medicines delivered to your doorstep
          </p>
          <a
            href="/cart"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Shop Now
          </a>
        </div>

        {/* CARD 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Online Consultation
          </h3>
          <p className="text-gray-500 mb-4">
            Please consult us for any health-related queries
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Contact Us
          </a>
        </div>

      </div>

    </div>
  );
}