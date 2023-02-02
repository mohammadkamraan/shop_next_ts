import { createContext } from "react";

import { Product } from "../typescript/INterfaces";

interface ReactContext {
  allProducts: Product[];
}

const CartProducts = createContext<ReactContext | null>(null);

export default CartProducts;
