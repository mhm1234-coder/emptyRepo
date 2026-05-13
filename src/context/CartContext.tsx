import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  name: string;
  price: number;
  qty: number;
};

type CartType = {
  cart: CartItem[];
  addToCart: (name: string, price: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(name: string, price: number) {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === name);

      if (existing) {
        return prev.map((i) =>
          i.name === name ? { ...i, qty: i.qty + 1 } : i
        );
      }

      return [...prev, { name, price, qty: 1 }];
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}