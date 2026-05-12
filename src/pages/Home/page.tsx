import { useCart } from "../../context/CartContext";
import { useLocation } from "react-router-dom";

export default function Home() {

  const { addToCart } = useCart();
  const location = useLocation();

  // get query from URL
  const query = new URLSearchParams(location.search).get("q") || "";

  const products = [
    { name: "Panadol", desc: "Relieves pain", price: 15, img: "/images/panadol.png" },
    { name: "Vitamin C", desc: "Boost immunity", price: 20, img: "/images/vitamins.png" },
    { name: "Cough Syrup", desc: "Soothes throat", price: 25, img: "/images/syrup.png" },
    { name: "Baby Care", desc: "Baby wellness", price: 22, img: "/images/babycare.png" },
  ];

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">

      <section className="hero">
        <div>
          <h1>Welcome to Pharmacy Store</h1>
          <p>Trusted Online Pharmacy</p>
        </div>

        <img src="/images/pharmacytrusts.png" width="200" />
      </section>

      <h2>Featured Products</h2>

      <div className="card-container">

        {filtered.map((p) => (
          <div className="card" key={p.name}>

            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <img src={p.img} />

            <button onClick={() => addToCart(p.name, p.price)}>
              Add To Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}