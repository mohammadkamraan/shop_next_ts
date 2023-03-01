import { createContext } from "react";

import { AddProductToCart } from "../../pages/products/[category]/[productId]/index";

export const AddToCartFunctionality = createContext<AddProductToCart | null>(
  null
);
