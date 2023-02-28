import { create } from "zustand";

import { CartObject, CartItem } from "../typescript/INterfaces";

export interface CartStore {
  cartData: CartObject;
  addItemsToCart: (item: CartItem) => void;
  setCartItems: (items: CartObject) => void;
}

const useCartStore = create<CartStore>((set: any) => ({
  cartData: {
    cartItems: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  addItemsToCart: item =>
    set((state: any) => {
      let newCartData: CartObject = { ...state.cartData };
      let foundedItem = state.cartData.cartItems.find(
        (cartItem: CartItem) => cartItem.id === item.id
      );
      if (foundedItem) {
        foundedItem.count += 1;
      } else {
        newCartData.cartItems = [...state.cartData.cartItems, item];
      }
      newCartData.totalAmount += 1;
      newCartData.totalPrice = +(
        state.cartData.totalPrice + item.discountedPrice
      ).toFixed(2);
      localStorage.setItem("cartItems", JSON.stringify(newCartData));
      return { cartData: newCartData };
    }),
  setCartItems: items =>
    set(() => ({
      cartData: items,
    })),
}));

export default useCartStore;
