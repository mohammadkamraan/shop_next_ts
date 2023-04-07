import { create } from "zustand";

import { Product } from "../typescript/INterfaces";

export interface FavoritesStore {
  favoritesData: Product[];
  addProductToFavorites: (product: Product) => void;
  removeProductFromFavorites: (productId: number) => void;
  initializeFavoritesData: (favorites: Product[]) => void;
}

const useFavoritesStore = create<FavoritesStore>((set: any) => ({
  favoritesData: [],
  addProductToFavorites: product =>
    set((state: FavoritesStore) => {
      const newFavorites = [product, ...state.favoritesData];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return { favoritesData: newFavorites };
    }),
  removeProductFromFavorites: productId =>
    set((state: FavoritesStore) => {
      const newFavorites = [...state.favoritesData].filter(
        favorite => favorite.id !== productId
      );
      if (newFavorites.length) {
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
      } else {
        localStorage.removeItem("favorites");
      }
      return { favoritesData: newFavorites };
    }),
  initializeFavoritesData: favorites =>
    set(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
      return { favoritesData: favorites };
    }),
}));

export default useFavoritesStore;
