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
    set((state: CartStore) => {
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
  incraseCartItemAmount: (index: number, price: number) =>
    set((state: CartStore) => {
      const cartData = { ...state.cartData };
      cartData.cartItems[index].count += 1;
      cartData.totalAmount += 1;
      cartData.totalPrice = cartData.totalPrice + price;
    }),
  setCartItems: items =>
    set(() => ({
      cartData: items,
    })),
}));

export default useCartStore;
