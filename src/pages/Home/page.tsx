import React from "react";
import { useCart } from "../../context/CartContext";

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div>

      <div className="hero">
        <h1>Welcome to My Pharmacy Store</h1>
        <p>
          Your trusted online pharmacy for medicines, health products and care.
        </p>
      </div>

      <section>
        <h2>Categories</h2>

        <div className="product-card">
          <h3>Tablets</h3>
          <img src="images/panadol.png" alt="Panadol" />
          <p>All medicines available</p>
          <button
            onClick={() =>
              addToCart({ name: "Panadol", price: 200 })
            }
          >
            Add To Cart
          </button>
        </div>

        <div className="product-card">
          <h3>Syrups</h3>
          <img src="images/syrup.png" alt="Syrups" />
          <p>Child & adult care syrups</p>
          <button
            onClick={() =>
              addToCart({ name: "Syrup", price: 100 })
            }
          >
            Add To Cart
          </button>
        </div>

        <div className="product-card">
          <h3>Vitamins</h3>
          <img src="images/vitamins.png" alt="Vitamins" />
          <p>Health supplements</p>
          <button
            onClick={() =>
              addToCart({ name: "Vitamins", price: 100 })
            }
          >
            Add To Cart
          </button>
        </div>

        <div className="product-card">
          <h3>Baby Care</h3>
          <img src="images/babycare.png" alt="Baby Care" />
          <p>Safe baby products</p>
          <button
            onClick={() =>
              addToCart({ name: "BabyCare", price: 150 })
            }
          >
            Add To Cart
          </button>
        </div>

      </section>

    </div>
  );
};

export default Home;