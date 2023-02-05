import { create } from "zustand";

export const useCartStore = create((set: any) => ({
  cartItems: [],
}));
