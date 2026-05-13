import { useCart } from "../../context/CartContext";

export default function Cart() {

  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="page">

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Cart is empty </p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} className="cart-item">
              <p>{item.name}</p>
              <p>Qty: {item.qty}</p>
              <p>Rs {item.price * item.qty}</p>
            </div>
          ))}

          <h3>Total: Rs {total}</h3>

          <button onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}

    </div>
  );
}