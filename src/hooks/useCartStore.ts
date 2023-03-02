import { create } from "zustand";

import { CartObject, CartItem } from "../typescript/INterfaces";

export interface CartStore {
  cartData: CartObject;
  addItemsToCart: (item: CartItem) => void;
  setCartItems: (items: CartObject) => void;
  incraseCartItemAmount: (index: number, price: number) => void;
  decriseCartItemAmount: (index: number, price: number) => void;
}

const useCartStore = create<CartStore>((set: any) => ({
  cartData: {
    serverCartData: [],
    cartItems: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  addItemsToCart: item =>
    set((state: CartStore) => {
      let newCartData: CartObject = { ...state.cartData };
      let foundedItemIndex = state.cartData.cartItems.findIndex(
        (cartItem: CartItem) => cartItem.id === item.id
      );
      if (foundedItemIndex >= 0) {
        newCartData.cartItems[foundedItemIndex].count += 1;
        newCartData.serverCartData[foundedItemIndex].quantity += 1;
      } else {
        newCartData.cartItems = [...state.cartData.cartItems, item];
        newCartData.serverCartData = [
          ...state.cartData.serverCartData,
          { productId: item.id, quantity: item.count },
        ];
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
      cartData.totalPrice = +(cartData.totalPrice + price).toFixed(2);
      cartData.serverCartData[index].quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(cartData));
      return { cartData };
    }),
  decriseCartItemAmount: (index: number, price: number) =>
    set((state: CartStore) => {
      const cartData = { ...state.cartData };
      const totalPrice = +(cartData.totalPrice - price).toFixed(2);
      if (cartData.cartItems[index].count === 1) {
        cartData.cartItems.splice(index, 1);
        cartData.serverCartData.splice(index, 1);
      } else {
        cartData.cartItems[index].count -= 1;
        cartData.serverCartData[index].quantity -= 1;
      }
      cartData.totalAmount -= 1;
      cartData.totalPrice = totalPrice ? totalPrice : 0;
      localStorage.setItem("cartItems", JSON.stringify(cartData));
      return { cartData };
    }),
  setCartItems: items =>
    set(() => ({
      cartData: items,
    })),
}));

export default useCartStore;
