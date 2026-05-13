export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">

      {/* MAIN FOOTER */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold mb-2">Pharmacy Store</h3>
          <p className="text-gray-400">
            Your trusted online pharmacy platform
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <p className="text-gray-400">24/7 Customer Care</p>
          <p className="text-gray-400">support@pharmacystore.com</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Pharmacy Store. All rights reserved.
      </div>

    </footer>
  );
}