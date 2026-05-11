import React from "react";
import { useCart } from "../../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, getTotal } = useCart();

  return (
    <div className="cart-page">

      <div className="box">

        <h2>Your Cart</h2>
        <p>Review medicines before checkout</p>

        {cart.length === 0 ? (
          <p style={{ marginTop: "20px" }}>Cart is empty</p>
        ) : (
          <>
            <table>

              <thead>
                <tr>
                  <th>Medicine</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>Rs {item.price}</td>
                    <td>{item.qty}</td>
                    <td>Rs {item.price * item.qty}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.name)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

            {/* SUMMARY */}
            <div style={{ marginTop: "20px", textAlign: "right" }}>
              <h3>Total: Rs {getTotal()}</h3>

              <button
                style={{ marginRight: "10px" }}
                onClick={clearCart}
              >
                Clear Cart
              </button>

              <button
                onClick={() => alert("Order placed successfully!")}
              >
                Checkout
              </button>
            </div>
          </>
        )}

      </div>

    </div>
  );
};

export default CartPage;