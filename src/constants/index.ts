export const Domain =
  process.env.NODE_ENV === "development"
    ? "localhost:3000"
    : "https://shop-next-ts-mohammad-kamran.vercel.app";

export const WITHOUT_lAYOUT_ROUTES: string[] = ["/login", "/singup"];

export enum EndPoints {
  PRODUCTS = "products",
  SINUP = "users",
  LOGIN = "auth/login",
  CART = "carts",
}

export enum LocalStorageKeys {
  CART_ITEMS = "cartItems",
  FAVORITES = "favorites",
}
