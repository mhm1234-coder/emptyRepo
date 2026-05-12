import { createContext, useContext, useState } from "react";

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

const CartContext = createContext<CartType | null>(null);

export function CartProvider({ children }: any) {

  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(name: string, price: number) {

    setCart(prev => {

      const existing = prev.find(i => i.name === name);

      if (existing) {
        return prev.map(i =>
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
  return useContext(CartContext)!;
}