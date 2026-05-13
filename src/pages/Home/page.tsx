import { useCart } from "../../context/CartContext";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { addToCart } = useCart();
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q") || "";

  const products = [
    { name: "Panadol", desc: "Relieves pain", price: 15, img: "/images/panadol.png" },
    { name: "Vitamin C", desc: "Boost immunity", price: 20, img: "/images/vitamins.png" },
    { name: "Cough Syrup", desc: "Soothes throat", price: 25, img: "/images/syrup.png" },
    { name: "Baby Care", desc: "Baby wellness", price: 22, img: "/images/babycare.png" },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-2xl shadow-md mb-10">

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white bg-red-700 inline-block px-4 py-2 rounded-lg">
            Welcome to Pharmacy Store
          </h1>
          <p className="text-gray-600 text-lg">
            Trusted Online Pharmacy
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <img
            src="/images/pharmacytrusts.png"
            className="w-40 md:w-52"
            alt="pharmacy"
          />
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-pink-300 border border-amber-50 p-6 rounded-xl mb-10 space-y-2 text-gray-700">
        <p>Get 50% off on your first order! Use code: FIRST50</p>
        <p>Free delivery on orders above Rs 500</p>
        <p>Consult our pharmacists online for any health-related queries</p>
        <p>We care for your health and wellness</p>
        <p>Shop with confidence at Pharmacy Store - Your trusted online pharmacy partner</p>
      </section>

      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Featured Products
      </h2>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {filtered.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {p.name}
            </h3>

            <p className="text-gray-500 text-sm mb-3">
              {p.desc}
            </p>

            <img
              src={p.img}
              alt={p.name}
              className="w-24 h-24 object-contain mb-4"
            />

            <button
              onClick={() => addToCart(p.name, p.price)}
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition"
            >
              Add To Cart
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}