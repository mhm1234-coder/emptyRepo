import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Your Cart
      </h2>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-10">
          🛒 Cart is empty
        </p>
      ) : (
        <div className="space-y-4">

          {/* CART ITEMS */}
          {cart.map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md flex justify-between items-center"
            >

              <div>
                <p className="font-semibold text-gray-800">
                  {item.name}
                </p>
                <p className="text-gray-500 text-sm">
                  Qty: {item.qty}
                </p>
              </div>

              <p className="font-bold text-gray-800">
                Rs {item.price * item.qty}
              </p>

            </div>
          ))}

          {/* TOTAL */}
          <div className="bg-white p-5 rounded-xl shadow-md flex justify-between items-center mt-6">

            <h3 className="text-xl font-bold text-gray-800">
              Total
            </h3>

            <p className="text-xl font-bold text-red-600">
              Rs {total}
            </p>

          </div>

          {/* CLEAR BUTTON */}
          <button
            onClick={clearCart}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold"
          >
            Clear Cart
          </button>

        </div>
      )}

    </div>
  );
}