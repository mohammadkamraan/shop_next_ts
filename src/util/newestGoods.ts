import { discountPercentHandler } from "./discountHandler";
import { Product } from "../typescript/Interfaces";

type NewestGoods = (data: Product[]) => Product[];

export const newestGoods: NewestGoods = data => {
  const newestGoods: Product[] = [];
  let product: any;
  for (product of data) {
    newestGoods.push({ ...product, discountPercent: discountPercentHandler() });
  }
  return newestGoods;
};
