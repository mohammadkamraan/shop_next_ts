import { discountPercentHandler } from "./discountHandler";
import { Product } from "../../src/typescript/INterfaces";

type NewestGoods = (data: Product[]) => Product[];

export const newestGoods: NewestGoods = data => {
  const newestGoods: Product[] = [];
  let product: any;
  for (product of data) {
    newestGoods.push({ ...product, discountPercent: discountPercentHandler() });
  }
  console.log(newestGoods);
  return newestGoods;
};
