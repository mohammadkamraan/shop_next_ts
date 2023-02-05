import { create } from "zustand";

import { CartItem } from "../typescript/INterfaces";

interface CartStore {
  cartItems: CartItem[];
  addItemsToCart: (item: CartItem) => void;
  setCartItems: (items: CartItem[]) => void;
}

const useCartStore = create<CartStore>((set: any) => ({
  cartItems: [],
  addItemsToCart: item =>
    set((state: any) => {
      const newCartItems = state.cartItems;
      newCartItems.push(item);
      localStorage.setItem("cartItems", JSON.stringify([...newCartItems]));
      return { cartItems: [...newCartItems] };
    }),
  setCartItems: items =>
    set(() => ({
      cartItems: items,
    })),
}));

export default useCartStore;
