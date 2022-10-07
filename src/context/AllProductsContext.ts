import { createContext } from "react";

interface ReactContext {
  allProducts: any[];
}

const AllProductsContext = createContext<ReactContext | null>(null);

export default AllProductsContext;
