import { useEffect, useState } from "react";

type Product = {
  name: string;
  price: number;
  category: string;
  image: string;
};

type HomeProps = {
  search: string;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

export default function Home({ search, cart, setCart }: HomeProps) {
  const [filter, setFilter] = useState("all");
  const [toast, setToast] = useState("");

  const products: Product[] = [
    {
      name: "Panadol",
      price: 50,
      category: "tablets",
      image: "/images/panadol.png",
    },
    {
      name: "Syrup",
      price: 120,
      category: "syrups",
      image: "/images/syrup.png",
    },
    {
      name: "Vitamins",
      price: 200,
      category: "vitamins",
      image: "/images/vitamins.png",
    },
    {
      name: "Baby Care",
      price: 500,
      category: "baby-care",
      image: "/images/babycare.png",
    },
  ];

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
  const addToCart = (product: Product) => {
    const updated = [...cart, product];
    setCart(updated);

    setToast(`${product.name} added to cart`);
    setTimeout(() => setToast(""), 2000);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");

    setToast("Cart cleared");
    setTimeout(() => setToast(""), 2000);
  };

  const filteredProducts = products.filter((p) => {
    const keyword = search.toLowerCase();

    return (
      (filter === "all" || p.category === filter) &&
      (p.name.toLowerCase().includes(keyword) ||
        p.category.toLowerCase().includes(keyword))
    );
  });

  return (
    <div>

      {/* TOAST */}
      {toast && <div className="toast">{toast}</div>}

      {/* CATEGORIES */}
      <div className="page">

        <h2>Categories</h2>

        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("tablets")}>Tablets</button>
        <button onClick={() => setFilter("syrups")}>Syrups</button>
        <button onClick={() => setFilter("vitamins")}>Vitamins</button>
        <button onClick={() => setFilter("baby-care")}>Baby Care</button>

      </div>
<h2>Our Products</h2>
      {/* PRODUCTS */}
      <div className="card-container">

        {filteredProducts.map((product, i) => (
          <div key={i} className="card">

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>
            <p>Rs {product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

          </div>
        ))}

      </div>

      {/* CLEAR CART */}
      <div>
        <button onClick={clearCart}>
          Clear Cart
        </button>
      </div>

    </div>
  );
}