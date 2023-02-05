import { create } from "zustand";

const useCartStore = create((set: any) => ({
  cartItems: [],
  addItemsToCart: (item: any) =>
    set((state: any) => ({ cartItems: [...state.cartItems, item] })),
  setCartItems: (items: any) => set((state: any) => ({ cartItems: items })),
}));

export default useCartStore;
