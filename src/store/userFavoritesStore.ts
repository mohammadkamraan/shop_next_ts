import { create } from "zustand";

import { FavoriteData, Product } from "../typescript/INterfaces";

export interface FavoritesStore {
  favoritesData: FavoriteData;
  addProductToFavorites: (product: Product) => void;
  removeProductFromFavorites: (productId: number) => void;
  initializeFavoritesData: (favorites: Product[]) => void;
}

const useFavoritesStore = create<FavoritesStore>((set: any) => ({
  favoritesData: {
    favorites: [],
    favoritesId: [],
  },
  addProductToFavorites: product =>
    set((state: FavoritesStore) => {
      const updatedFavorites: FavoriteData = {
        favorites: [product, ...state.favoritesData.favorites],
        favoritesId: [
          product.id,
          ...(state.favoritesData.favoritesId as number[]),
        ],
      };
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return {
        favoritesData: updatedFavorites,
      };
    }),
  removeProductFromFavorites: productId =>
    set((state: FavoritesStore) => {
      const updatedFavorites: FavoriteData = {
        favorites: [...state.favoritesData.favorites].filter(
          favorite => favorite.id !== productId
        ),
        favoritesId: [...(state.favoritesData.favoritesId as number[])].filter(
          id => id !== productId
        ),
      };
      if (updatedFavorites.favorites.length) {
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      } else {
        localStorage.removeItem("favorites");
      }
      return { favoritesData: updatedFavorites };
    }),
  initializeFavoritesData: favorites =>
    set(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
      return { favoritesData: favorites };
    }),
}));

export default useFavoritesStore;
