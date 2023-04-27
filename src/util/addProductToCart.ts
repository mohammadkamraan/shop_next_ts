import { AddItemsToCart } from "../store/useCartStore";
import { toast } from "react-toastify";

import { Product } from "../typescript/AppInterfaces";
import type { AuthenticateStatus } from "../typescript/types";

interface IAddProductToCart {
  handler: AddItemsToCart;
  product: Product;
  count: number;
  status: AuthenticateStatus;
}

export type AddProductToCart = (data: IAddProductToCart) => void;

export const addProductToCartHandler: AddProductToCart = ({
  handler,
  count,
  product,
  status,
}) => {
  if (status === "loading") {
    toast.info("Your auth status is undifined");
  } else if (status === "unauthenticated") {
    toast.error("Please first login ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else {
    handler({
      ...product,
      count,
      discountedPrice: product.discountPercent
        ? product.price - (product.price / 100) * product.discountPercent
        : product.price,
    });
    toast.success("Added to the cart");
  }
};
