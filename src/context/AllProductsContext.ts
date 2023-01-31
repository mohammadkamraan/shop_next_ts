import { createContext } from "react";

import { Product } from "../typescript/INterfaces";

interface ReactContext {
  allProducts: Product[];
}

const AllProductsContext = createContext<ReactContext | null>(null);

export default AllProductsContext;
