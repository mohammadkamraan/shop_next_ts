import { NewGoodCardData } from "../components/newestGoods/newGoodCard/NewGoodCard";
import { discountPercentHandler } from "./discountHandler";
import { starsAmountHandler } from "./starsHandler";
import { Product } from "../../src/typescript/INterfaces";

type NewestGoods = (data: Product[]) => NewGoodCardData[];

export const newestGoods: NewestGoods = data => {
  const newestGoods: NewGoodCardData[] = [];
  let product: any;
  for (product of data) {
    newestGoods.push({
      discountPercent: discountPercentHandler(),
      description: product.description,
      id: product.id,
      imageSrc: product.image,
      price: product.price,
      stars: starsAmountHandler(),
      title: product.title,
    });
  }
  return newestGoods;
};
